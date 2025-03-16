// import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

// export const MockInterview = pgTable("mockInterview", {
//   id: serial("id").primaryKey(),
//   jsonMockResp: text("jsonMockResp").notNull(),
//   jobPosition: varchar("jobPosition").notNull(),
//   jobDesc: varchar("jobDesc").notNull(),
//   jobExperience: varchar("jobExperience").notNull(),
//   createdBy: varchar("createdBy").notNull(),
//   createdAt: varchar("createdAt"),
//   mockId: varchar("mockId").notNull(),
// });

import { pgTable,integer, timestamp, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt"),
  mockId: varchar("mockId").notNull(),
});

export const UserAnswer = pgTable('userAnswer', {
  id: serial('id').primaryKey(),
  mockIdRef: varchar('mockId').notNull(),
  question: varchar('question').notNull(),
  correctAns: text('correctAns'),
  userAns: text('userAns'),
  feedback: text('feedback'),
  rating: varchar('rating'),
  userEmail: varchar('userEmail'),
  createdAt: varchar('createdAt')
});


export const Feedback = pgTable('feedback', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at', { precision: 6 }).defaultNow(),
});