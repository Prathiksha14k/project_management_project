Project Management App

A team project management platform with workspaces, projects, tasks, and comments, with role-based access, a dashboard with analytics charts, and email notifications on task assignment.

Features
Login, sign-up, and workspace (team) management with Clerk
Admin and Member roles with role-based permissions
Projects and tasks with status, priority, assignee, and due dates
Dashboard with analytics charts and a calendar view
Task comments
Email on task assignment and a reminder on the due date
Tech Stack

React, Redux Toolkit, Tailwind CSS, Node.js, Express, PostgreSQL, Prisma, Clerk, Inngest, Nodemailer

Setup

Server

bash
cd server
npm install
npx prisma db push
npm run server

Client

bash
cd client
npm install
npm run dev
Environment Variables

server/.env

CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
DIRECT_URL=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
SENDER_EMAIL=
SMTP_USER=
SMTP_PASS=

client/.env

VITE_CLERK_PUBLISHABLE_KEY=
VITE_BASEURL=http://localhost:5000
