
# Reachinbox Assignment

## Tasks
The assignment is to use the designs and APIs provided and create a functional web app as per the following
instructions -
1. Implement the login page - Use the design provided ✅
2. Once logged in the user should be taken to the onebox screen. /google-login ✅
3. Implement fetching of data in onebox using api integration ✅
```
/onebox/list
GET /onebox/:thread_id
DELETE /onebox/:thread_id
```
4. Implement keyboard shortcuts in onebox - “D” should delete. “R” should open Reply box ✅
5. Implement custom text editor (Need to Add Custom button in editor like “SAVE” and “Variables”) 
6. Implement Reply - Clicking on send should send Reply
```
POST /reply/:thread_id
```
7. Implement both - light and dark mode ✅



## Deployment

Project deployed on:

```bash
  https://reachinbox-task.vercel.app/signin
```

## Tech Stack

**Client:** TypeScript, Next, React, Redux, TailwindCSS, shadcn, axios, 


## Screenshots

### /signin
![Screenshot 2024-08-05 163117](https://github.com/user-attachments/assets/780d590d-abb4-475f-806d-291780ef38df)

### /dashboard
![Screenshot 2024-08-05 163130](https://github.com/user-attachments/assets/943fd7d7-3fc3-466e-ab9e-a3c0674837c8)

### /dashboard/inbox/:thread_id
![Screenshot 2024-08-05 163143](https://github.com/user-attachments/assets/b613a33a-52f5-4834-a124-62d3948cad0c)

### Light Mode
![Screenshot 2024-08-05 163629](https://github.com/user-attachments/assets/f0edf14f-6f3c-4d32-8b45-09eb916d3ec4)

### Reply box ('r' key)
![Screenshot 2024-08-05 163153](https://github.com/user-attachments/assets/9d735f10-9f98-4902-aac3-47ce3fe24df8)

### Delete modal ('d' key)
![Screenshot 2024-08-05 163214](https://github.com/user-attachments/assets/45127730-6237-41d7-bb9f-a88ed846b054)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
