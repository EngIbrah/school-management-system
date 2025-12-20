// ROLE

export type Role = "admin" | "teacher" | "student" | "parent";

export const role: Role = "teacher";  // or "admin" for testing
// ===== TEACHERS =====
export const teachersData = [
  { id: 1, teacherId: "T001", name: "Amina Suleiman", email: "amina.suleiman@schooltz.ac.tz", photo: "https://randomuser.me/api/portraits/women/65.jpg", phone: "+255712345678", subjects: ["Mathematics", "Physics"], classes: ["1A", "2B", "3C"], address: "Dar es Salaam, Tanzania" },
  { id: 2, teacherId: "T002", name: "Juma Mrema", email: "juma.mrema@schooltz.ac.tz", photo: "https://randomuser.me/api/portraits/men/52.jpg", phone: "+255712345679", subjects: ["Kiswahili", "History"], classes: ["4A", "5B", "6C"], address: "Dodoma, Tanzania" },
  { id: 3, teacherId: "T003", name: "Fatuma Rashid", email: "fatuma.rashid@schooltz.ac.tz", photo: "https://randomuser.me/api/portraits/women/43.jpg", phone: "+255712345680", subjects: ["Biology", "Chemistry"], classes: ["3A", "4B", "5C"], address: "Mwanza, Tanzania" },
  { id: 4, teacherId: "T004", name: "Hassan Mbarouk", email: "hassan.mbarouk@schooltz.ac.tz", photo: "https://randomuser.me/api/portraits/men/47.jpg", phone: "+255712345681", subjects: ["Geography", "Civics"], classes: ["1B", "2C", "3D"], address: "Arusha, Tanzania" },
  { id: 5, teacherId: "T005", name: "Neema Komba", email: "neema.komba@schooltz.ac.tz", photo: "https://randomuser.me/api/portraits/women/55.jpg", phone: "+255712345682", subjects: ["Commerce", "Computer Studies"], classes: ["5A", "6B", "7C"], address: "Moshi, Tanzania" }
];

// ===== STUDENTS =====
export const studentsData = [
  { id: 1, studentId: "S001", name: "Asha Mwanga", email: "asha.mwanga@student.tz", photo: "https://randomuser.me/api/portraits/women/33.jpg", phone: "+255713456789", grade: 1, class: "1A", address: "Dar es Salaam, Tanzania" },
  { id: 2, studentId: "S002", name: "Hussein Ally", email: "hussein.ally@student.tz", photo: "https://randomuser.me/api/portraits/men/34.jpg", phone: "+255713456790", grade: 2, class: "2B", address: "Dodoma, Tanzania" },
  { id: 3, studentId: "S003", name: "Neema Komba", email: "neema.komba@student.tz", photo: "https://randomuser.me/api/portraits/women/35.jpg", phone: "+255713456791", grade: 3, class: "3C", address: "Mwanza, Tanzania" },
  { id: 4, studentId: "S004", name: "Salim Rajabu", email: "salim.rajabu@student.tz", photo: "https://randomuser.me/api/portraits/men/36.jpg", phone: "+255713456792", grade: 4, class: "4A", address: "Arusha, Tanzania" },
  { id: 5, studentId: "S005", name: "Neema Mushi", email: "neema.mushi@student.tz", photo: "https://randomuser.me/api/portraits/women/37.jpg", phone: "+255713456793", grade: 5, class: "5B", address: "Moshi, Tanzania" },
  { id: 6, studentId: "S006", name: "Abdallah Khamis", email: "abdallah.khamis@student.tz", photo: "https://randomuser.me/api/portraits/men/38.jpg", phone: "+255713456794", grade: 6, class: "6C", address: "Dodoma, Tanzania" },
  { id: 7, studentId: "S007", name: "Amina Said", email: "amina.said@student.tz", photo: "https://randomuser.me/api/portraits/women/39.jpg", phone: "+255713456795", grade: 7, class: "7A", address: "Dar es Salaam, Tanzania" },
  { id: 8, studentId: "S008", name: "Juma Hassan", email: "juma.hassan@student.tz", photo: "https://randomuser.me/api/portraits/men/40.jpg", phone: "+255713456796", grade: 8, class: "8B", address: "Mwanza, Tanzania" },
  { id: 9, studentId: "S009", name: "Zainab Mohamed", email: "zainab.mohamed@student.tz", photo: "https://randomuser.me/api/portraits/women/41.jpg", phone: "+255713456797", grade: 1, class: "1B", address: "Arusha, Tanzania" },
  { id: 10, studentId: "S010", name: "Hassan Juma", email: "hassan.juma@student.tz", photo: "https://randomuser.me/api/portraits/men/42.jpg", phone: "+255713456798", grade: 2, class: "2C", address: "Moshi, Tanzania" }
];

// ===== PARENTS =====
export const parentsData = [
  { id: 1, name: "Fatma Mwanga", students: ["Asha Mwanga"], email: "fatma.mwanga@parent.tz", phone: "+255714567890", address: "Dar es Salaam, Tanzania" },
  { id: 2, name: "Ali Ally", students: ["Hussein Ally"], email: "ali.ally@parent.tz", phone: "+255714567891", address: "Dodoma, Tanzania" },
  { id: 3, name: "Sophia Komba", students: ["Neema Komba"], email: "sophia.komba@parent.tz", phone: "+255714567892", address: "Mwanza, Tanzania" },
  { id: 4, name: "Rajabu Said", students: ["Salim Rajabu"], email: "rajabu.said@parent.tz", phone: "+255714567893", address: "Arusha, Tanzania" },
  { id: 5, name: "Mariam Mushi", students: ["Neema Mushi"], email: "mariam.mushi@parent.tz", phone: "+255714567894", address: "Moshi, Tanzania" }
];

// ===== SUBJECTS =====
export const subjectsData = [
  { id: 1, name: "Mathematics", teachers: ["Amina Suleiman"] },
  { id: 2, name: "Kiswahili", teachers: ["Juma Mrema"] },
  { id: 3, name: "Physics", teachers: ["Amina Suleiman"] },
  { id: 4, name: "Biology", teachers: ["Fatuma Rashid"] },
  { id: 5, name: "Chemistry", teachers: ["Fatuma Rashid"] },
  { id: 6, name: "History", teachers: ["Juma Mrema"] },
  { id: 7, name: "Civics", teachers: ["Hassan Mbarouk"] },
  { id: 8, name: "Geography", teachers: ["Hassan Mbarouk"] },
  { id: 9, name: "Commerce", teachers: ["Neema Komba"] },
  { id: 10, name: "Computer Studies", teachers: ["Neema Komba"] }
];

// ===== CLASSES =====
export const classesData = [
  { id: 1, name: "1A", capacity: 40, grade: 1, supervisor: "Amina Suleiman" },
  { id: 2, name: "1B", capacity: 38, grade: 1, supervisor: "Juma Mrema" },
  { id: 3, name: "2B", capacity: 42, grade: 2, supervisor: "Amina Suleiman" },
  { id: 4, name: "2C", capacity: 40, grade: 2, supervisor: "Hassan Mbarouk" },
  { id: 5, name: "3C", capacity: 36, grade: 3, supervisor: "Amina Suleiman" },
  { id: 6, name: "3D", capacity: 35, grade: 3, supervisor: "Hassan Mbarouk" },
  { id: 7, name: "4A", capacity: 40, grade: 4, supervisor: "Juma Mrema" },
  { id: 8, name: "5B", capacity: 38, grade: 5, supervisor: "Neema Komba" },
  { id: 9, name: "6C", capacity: 36, grade: 6, supervisor: "Fatuma Rashid" },
  { id: 10, name: "7A", capacity: 35, grade: 7, supervisor: "Amina Suleiman" }
];

// ===== LESSONS =====
export const lessonsData = [
  { id: 1, subject: "Mathematics", class: "1A", teacher: "Amina Suleiman" },
  { id: 2, subject: "Kiswahili", class: "1B", teacher: "Juma Mrema" },
  { id: 3, subject: "Physics", class: "2B", teacher: "Amina Suleiman" },
  { id: 4, subject: "Biology", class: "3C", teacher: "Fatuma Rashid" },
  { id: 5, subject: "Chemistry", class: "3D", teacher: "Fatuma Rashid" },
  { id: 6, subject: "History", class: "4A", teacher: "Juma Mrema" },
  { id: 7, subject: "Civics", class: "5B", teacher: "Hassan Mbarouk" },
  { id: 8, subject: "Geography", class: "6C", teacher: "Hassan Mbarouk" },
  { id: 9, subject: "Commerce", class: "5B", teacher: "Neema Komba" },
  { id: 10, subject: "Computer Studies", class: "5B", teacher: "Neema Komba" }
];

// ===== EXAMS =====
export const examsData = lessonsData.map((lesson, i) => ({
  id: i + 1,
  subject: lesson.subject,
  class: lesson.class,
  teacher: lesson.teacher,
  date: new Date(2025, 0, i + 10).toISOString().split("T")[0],
}));

// ===== ASSIGNMENTS =====
export const assignmentsData = lessonsData.map((lesson, i) => ({
  id: i + 1,
  subject: lesson.subject,
  class: lesson.class,
  teacher: lesson.teacher,
  dueDate: new Date(2025, 0, i + 15).toISOString().split("T")[0],
}));

// ===== RESULTS =====
export const resultsData = studentsData.flatMap((student, i) =>
  lessonsData.map((lesson, j) => ({
    id: i * lessonsData.length + j + 1,
    subject: lesson.subject,
    class: lesson.class,
    teacher: lesson.teacher,
    student: student.name,
    date: new Date(2025, 0, j + 10).toISOString().split("T")[0],
    type: "exam",
    score: Math.floor(Math.random() * 41) + 60, // 60-100
  }))
);

// ===== EVENTS =====
export const eventsData = [
  { id: 1, title: "Science Fair", class: "1A", date: "2025-02-15", startTime: "10:00", endTime: "12:00" },
  { id: 2, title: "Sports Day", class: "2B", date: "2025-02-16", startTime: "08:00", endTime: "15:00" },
  { id: 3, title: "National Holiday Celebration", class: "3C", date: "2025-02-17", startTime: "09:00", endTime: "11:00" },
  { id: 4, title: "Parent-Teacher Meeting", class: "4A", date: "2025-02-18", startTime: "14:00", endTime: "16:00" },
  { id: 5, title: "School Excursion", class: "5B", date: "2025-02-19", startTime: "07:00", endTime: "17:00" }
];

// ===== ANNOUNCEMENTS =====
export const announcementsData = [
  { id: 1, title: "About 1A Math Test", class: "1A", date: "2025-01-15" },
  { id: 2, title: "About 2B Kiswahili Test", class: "2B", date: "2025-01-16" },
  { id: 3, title: "About 3C Physics Test", class: "3C", date: "2025-01-17" },
  { id: 4, title: "Parent-Teacher Meeting", class: "4A", date: "2025-02-18" },
  { id: 5, title: "Sports Day Announcement", class: "2B", date: "2025-02-16" }
];

// ===== CALENDAR EVENTS =====
export const calendarEvents = [
  { title: "Mathematics", allDay: false, start: new Date(2025, 0, 20, 8, 0), end: new Date(2025, 0, 20, 8, 45) },
  { title: "Kiswahili", allDay: false, start: new Date(2025, 0, 20, 9, 0), end: new Date(2025, 0, 20, 9, 45) },
  { title: "Physics", allDay: false, start: new Date(2025, 0, 20, 10, 0), end: new Date(2025, 0, 20, 10, 45) },
  { title: "Biology", allDay: false, start: new Date(2025, 0, 20, 11, 0), end: new Date(2025, 0, 20, 11, 45) },
  { title: "Chemistry", allDay: false, start: new Date(2025, 0, 20, 13, 0), end: new Date(2025, 0, 20, 13, 45) },
];
