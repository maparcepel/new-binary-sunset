{
    "name": "new-binary-sunset",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "bootstrap": "^5.0.2",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-icons": "^4.2.0",
        "react-router-dom": "^5.2.0",
        "react-scripts": "4.0.3",
        "web-vitals": "^1.0.1"
    },
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    },
    "devDependencies": {
        "gh-pages": "^3.2.3",
        "sass": "^1.35.1"
    },
    "homepage": "https://maparcepel.github.io/new-binary-sunset/"
}