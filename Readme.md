# KenyaNet

## KenyaNet is a social networking app designed for the community of Mombasa, Kenya. It allows users to create profiles, join groups, and organize and attend meetups, events, webinars, and conferences. With KenyaNet, users can connect with like-minded individuals, share their interests, and build a strong community around shared passions and goals.

## The app features a user-friendly interface that makes it easy to browse events, join groups, and RSVP to meetups. It also offers real-time notifications, push notifications, and messaging features that help users stay up-to-date on the latest events and activities.

## KenyaNet is powered by Firebase, which provides a secure and reliable platform for storing and retrieving user data, as well as hosting and serving the app. The app is built using React Native, which offers a fast and responsive user experience across multiple platforms and devices.

## Whether you're looking to network with other professionals, learn new skills, or simply have fun and meet new people, KenyaNet has everything you need to get started. Join today and start building your community!

<br />

# KenyaNet `Features` & `stack`

- `Front-end`: React Native
- `Back-end`: Firebase Realtime Database, Firebase Cloud Storage
- `Authentication`: Firebase Authentication
- `Video Conferencing`: Firebase Cloud Functions with WebRTC (e.g., using \* `Twilio Video API or Agora.io`)
  `Push Notifications`: Firebase Cloud Messaging
  `Backend Hosting`: Firebase Hosting
- `Development Environment`: Node.js, React Native CLI, Android/iOS emulator or a physical device for testing
  `Version Control`: Git (e.g., using GitHub, Bitbucket, or GitLab)
  `IDE`: Visual Studio Code, Atom, or any other preferred IDE
- `UI Framework:` React Native Elements, React Native Paper, or any other preferred UI framework

# floder structure

```bash
  src/
|- assets/                 # Images, fonts, and other static assets
|- components/             # Reusable UI components
|- config/                 # Configuration files (e.g. Firebase settings)
|- navigation/             # Navigation logic and routing
|- screens/                # Top-level screens or views
|- services/               # API services and other third-party integrations
|- store/                  # Redux store configuration and state management
|- styles/                 # Global styles and theme files
|- utils/                  # Utility functions and helpers
App.tsx                      # App entry point
```

In this folder structure, the `src ` folder contains all the source code for the app, while subfolders such as `assets`, `components`, `config`, `navigation`, `screens`, `services`, `store`, `styles`, and `utils` are used to organize specific parts of the app.
