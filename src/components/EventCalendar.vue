<!-- EventCalendar.vue -->
<template>
  <div class="event-calendar">
    <!-- Calendar Header -->
    <div class="calendar-header">
      <span class="calendar-month">{{ currentMonthName }}, {{ currentYear }}</span>
      <div class="calendar-nav">
        <button @click="previousMonth" class="nav-btn">‹</button>
        <button @click="nextMonth" class="nav-btn">›</button>
      </div>
    </div>

    <!-- Calendar Table -->
    <table class="calendar-table">
      <thead>
        <tr>
          <th class="week sunday">Dim</th>
          <th class="week weekday">Lun</th>
          <th class="week weekday">Mar</th>
          <th class="week weekday">Mer</th>
          <th class="week weekday">Jeu</th>
          <th class="week weekday">Ven</th>
          <th class="week saturday">Sam</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(week, weekIndex) in calendarWeeks" :key="weekIndex">
          <td 
            v-for="(day, dayIndex) in week" 
            :key="dayIndex"
            :class="getDayClasses(day)"
            @click="onDayClick(day)"
          >
            <template v-if="day.date">
              {{ day.date }}
              <div v-if="day.events.length > 0" class="events-container">
                <span 
                  v-for="(event, eventIndex) in day.events.slice(0, maxEventsPerDay)" 
                  :key="eventIndex"
                  :class="['event', event.type]"
                  @click.stop="onEventClick(event)"
                >
                  {{ event.title }}
                </span>
                <span 
                  v-if="day.events.length > maxEventsPerDay"
                  class="event-more"
                  @click.stop="onMoreEventsClick(day)"
                >
                  +{{ day.events.length - maxEventsPerDay }} plus
                </span>
              </div>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

// Props
const props = defineProps({
  events: {
    type: Array,
    default: () => []
  },
  initialDate: {
    type: Date,
    default: () => new Date()
  },
  maxEventsPerDay: {
    type: Number,
    default: 3
  },
  footerText: {
    type: String,
    default: 'Liste des rendez-vous'
  },
  arrowDown: {
    type: String,
    required: false
  }
})

// Emits
const emit = defineEmits([
  'day-click',
  'event-click',
  'more-events-click',
  'month-change'
])

// Reactive data
const currentDate = ref(new Date(props.initialDate))

// Computed properties
const currentYear = computed(() => currentDate.value.getFullYear())
const currentMonth = computed(() => currentDate.value.getMonth())

const currentMonthName = computed(() => {
  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ]
  return monthNames[currentMonth.value]
})

const calendarWeeks = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value
  
  // Get first day of month and last day of month
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  
  // Get first day of week (Sunday = 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const weeks = []
  const currentWeekDate = new Date(startDate)
  
  // Generate 6 weeks (42 days) to fill the calendar
  for (let week = 0; week < 6; week++) {
    const weekDays = []
    
    for (let day = 0; day < 7; day++) {
      const date = currentWeekDate.getDate()
      const isCurrentMonth = currentWeekDate.getMonth() === month
      const dayEvents = getEventsForDate(new Date(currentWeekDate))
      
      weekDays.push({
        date: isCurrentMonth ? date : null,
        fullDate: new Date(currentWeekDate),
        isCurrentMonth,
        isToday: isToday(currentWeekDate),
        isWeekend: currentWeekDate.getDay() === 0 || currentWeekDate.getDay() === 6,
        events: dayEvents
      })
      
      currentWeekDate.setDate(currentWeekDate.getDate() + 1)
    }
    
    weeks.push(weekDays)
  }
  
  return weeks
})

// Methods
const getEventsForDate = (date) => {
  return props.events.filter(event => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getDate() === date.getDate() &&
      eventDate.getMonth() === date.getMonth() &&
      eventDate.getFullYear() === date.getFullYear()
    )
  })
}

const isToday = (date) => {
  const today = new Date()
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

const getDayClasses = (day) => {
  const classes = []
  
  if (!day.isCurrentMonth) return classes
  
  if (day.isToday) classes.push('today')
  if (day.isWeekend) classes.push('weekend')
  
  // Check for special red days (you can customize this logic)
  const redDays = [1, 15] // Example: 1st and 15th of each month
  if (redDays.includes(day.date)) {
    classes.push('red-day')
  }
  
  return classes
}

const previousMonth = () => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() - 1)
  currentDate.value = newDate
  emit('month-change', newDate)
}

const nextMonth = () => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() + 1)
  currentDate.value = newDate
  emit('month-change', newDate)
}

const onDayClick = (day) => {
  if (day.date) {
    emit('day-click', day)
  }
}

const onEventClick = (event) => {
  emit('event-click', event)
}

const onMoreEventsClick = (day) => {
  emit('more-events-click', day)
}

// Public methods (exposed to parent component)
const goToDate = (date) => {
  currentDate.value = new Date(date)
}

const addEvent = (event) => {
  // This would typically be handled by the parent component
  // but we can emit an event for it
  emit('add-event', event)
}

// Expose methods to parent
defineExpose({
  goToDate,
  addEvent,
  currentDate: computed(() => currentDate.value)
})

// Watch for prop changes
watch(() => props.initialDate, (newDate) => {
  currentDate.value = new Date(newDate)
})
</script>

<style scoped>
.event-calendar {
  width: 100%;
  font-family: "League Spartan", Arial, sans-serif;
}

.calendar-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
}

.calendar-month {
  font-size: 18px;
  font-weight: 500;
  margin-right: 2px;
}

.icon-arrow {
  width: 15px;
  height: 15px;
  margin-right: auto;
  margin-left: 2px;
}

.calendar-nav {
  display: flex;
  gap: 8px;
  margin-left: auto;
}

.nav-btn {
  background: #43A047;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.15s;
}

.nav-btn:hover {
  background: #2E7D31;
}

.calendar-table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  background: #fff;
  font-size: 15px;
}

.calendar-table th,
.calendar-table td {
  border: 1px solid #ededed;
  text-align: left;
  width: 66px;
  min-width: 66px;
  height: 100px;
  max-height: 66px;
  vertical-align: top;
  position: relative;
  padding: 7px 5px 7px 7px;
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;
}

.calendar-table td:hover {
  background-color: #f5f5f5;
}

.calendar-table .week {
  background: #43A047;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  border: none;
  height: 15px;
  width: 66px;
  cursor: default;
}

.calendar-table .weekday {
  background: var(--Primary---600, #43A047);
}

.calendar-table .sunday,
.calendar-table .saturday {
  background: var(--Primary---500, #6CC447);
}

.calendar-table td:nth-child(1),   /* Dimanche */
.calendar-table td:nth-child(7) {  /* Samedi */
  color: var(--Red, #EF5350);
  font-weight: 600;
}

.calendar-table td.red-day {
  color: var(--Red, #EF5350);
  font-weight: 600;
}

.calendar-table td.today {
  background-color: #E3F2FD;
  border: 2px solid #2196F3;
  font-weight: bold;
}

.calendar-table td.weekend {
  background-color: #fafafa;
}

.events-container {
  margin-top: 2px;
}

.event {
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  margin-top: 2px;
  margin-right: 2px;
  padding: 1px 6px;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.1s;
}

.event:hover {
  transform: scale(1.05);
}

.event.red { 
  background: #FFDBDB; 
  color: #EF5350; 
}

.event.green { 
  background: #E6F8EC; 
  color: #43A047; 
}

.event.blue { 
  background: #E3F2FD; 
  color: #2196F3; 
}

.event.orange { 
  background: #FFF3E0; 
  color: #FF9800; 
}

.event-more {
  display: inline-block;
  font-size: 9px;
  font-weight: 500;
  margin-top: 2px;
  padding: 1px 4px;
  border-radius: 4px;
  background: #f0f0f0;
  color: #666;
  cursor: pointer;
}

.event-more:hover {
  background: #e0e0e0;
}

.calendar-footer {
  color: var(--Neutral---600, #4B5563);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 25px;
}
</style>