## Next.js Wellness App

The Next.js wellness App is a web application designed to aid users in monitoring their health and fitness progress. Offering a diverse range of features, this app assists in managing wellness routines and fostering a healthier lifestyle.

### Features

1. **Quiz Page:** Initiated with a quiz, the app guides users through various questions, collecting crucial data to tailor wellness and health recommendations.

2. **Redux Toolkit Slices:** Efficient state management using Redux Toolkit slices ensures organized data handling across multiple components and pages.

3. **Height and Weight Pages:** Users input their height, weight, and target weight, with a switcher for metric/imperial units, facilitating Body Mass Index (BMI) calculations.

4. **BMI Results Page:** Utilizing user data, the app calculates BMI and categorizes it as UNDERWEIGHT, NORMAL, OVERWEIGHT, or OBESE, offering detailed descriptions for each category.

5. **Testimonials:** Read inspiring feedback from users across the globe who have achieved their health goals using the app, now available in all supported languages.

6. **Loader:** Smooth transitions between app sections are facilitated by a Loader component displaying engaging loading animations.

7. **Progress Bars:** Dynamic progress bars reflect the user's BMI category, providing visual health progress tracking.

8. **Routing and Communication:** Seamless navigation between quiz, variants, height/weight input, and results, with interactive component communication for a smooth user experience.

9. **Navigation:** Users can move across 14 different app pages, including a "Step Back" button for easy navigation.

10. **Email:** Streamlines user engagement by enabling seamless email registration through API. Featuring dual-layer validation, this function ensures only valid and unique email addresses are captured and stored in PostgreSQL database on Vercel, enhancing data integrity and user experience.

11. **Offer:** Users can select from three available plans.

12. **Checkout:** Checkout module offers a streamlined simulation of payment procedures, integrating thorough validations and secure data handling. Utilizing the /submit-checkout endpoint, it efficiently processes and stores transaction details in Vercel-hosted PostgreSQL database, embodying a secure, accurate, and user-friendly payment experience.

13. **Theme Switcher:** Toggle between light and dark themes for personalized app display.

14. **Multilingual Support:** I've thrilled to announce a major update to my app with full localization in English, German, and French! This update is part of commitment to making the wellness app accessible and user-friendly for a global audience.

### Usage

To run the app:

1. Clone the repository to your local machine: `git clone https://github.com/njordulv/next-wellness-app.git`
2. Install the required dependencies using Yarn: `yarn install`
3. Navigate to the backend API directory: `cd api`
4. Start the backend server: `yarn dev`
5. Return to the root directory of the project.
6. Start the frontend development server: `yarn dev`
7. Open your web browser and navigate to http://localhost:3000 to access the app.

### Future Enhancements

This project is actively maintained and open to further improvements. Some possible future enhancements include:

- Additional questions and quiz variants to gather more comprehensive user data.
- Integration with a user account system to save and track progress over time.
- Enhanced data visualization and analysis to provide more personalized health recommendations.

### Contributing

Contributions are welcome:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your feature or bug fix"`
4. Push your changes to your fork: `git push origin feature/your-feature-name`
5. Create a pull request on the original repository's main branch.

### License

This project is licensed under the [MIT License](LICENSE).

### Credits

- Created by Njordr
- This project was created with [Create Next App](https://nextjs.org/).
