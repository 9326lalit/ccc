import Dexie from 'dexie';

export const db = new Dexie('CodingConquerorsDB');

// Define database schema
db.version(1).stores({
  students: '++id, name, email, phone, course, enrollmentDate',
  courses: '++id, name, duration, level, description',
  enquiries: '++id, name, email, phone, message, date'
});

// Initialize default courses
db.on('populate', async () => {
  await db.courses.bulkAdd([
    {
      name: 'Web Development Fundamentals',
      duration: '3 months',
      level: 'Beginner',
      description: 'Learn HTML, CSS, and JavaScript basics for building modern websites.'
    },
    {
      name: 'Python Programming',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      description: 'Learn Python programming from basics to advanced concepts.'
    },
    {
      name: 'Java Programming',
      duration: '5 months',
      level: 'Intermediate',
      description: 'Comprehensive Java programming course with practical projects.'
    },
    {
      name: 'SQL Database',
      duration: '2 months',
      level: 'Beginner to Intermediate',
      description: 'Master database concepts and SQL query language for data management.'
    },
    {
      name: 'C Programming',
      duration: '3 months',
      level: 'Beginner',
      description: 'Learn fundamental programming concepts with C language.'
    }
  ]);
});

// Helper functions for database operations
export const addStudent = async (studentData) => {
  return await db.students.add({
    ...studentData,
    enrollmentDate: new Date()
  });
};

export const addEnquiry = async (enquiryData) => {
  return await db.enquiries.add({
    ...enquiryData,
    date: new Date()
  });
};

export const getCourses = async () => {
  return await db.courses.toArray();
};

export const getStudents = async () => {
  return await db.students.toArray();
};

export const getEnquiries = async () => {
  return await db.enquiries.toArray();
};