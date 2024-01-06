## Next.js Wellness App

The Next.js wellness App is a web application designed to aid users in monitoring their health and fitness progress. Offering a diverse range of features, this app assists in managing wellness routines and fostering a healthier lifestyle.

### Features

1. **Quiz Page:** Initiated with a quiz, the app guides users through various questions, collecting crucial data to tailor wellness and health recommendations.

2. **Redux Toolkit Slices:** Efficient state management using Redux Toolkit slices ensures organized data handling across multiple components and pages.

3. **Height and Weight Pages:** Users input their height, weight, and target weight, with a switcher for metric/imperial units, facilitating Body Mass Index (BMI) calculations.

4. **BMI Results Page:** Utilizing user data, the app calculates BMI and categorizes it as UNDERWEIGHT, NORMAL, OVERWEIGHT, or OBESE, offering detailed descriptions for each category.

5. **Testimonials:** Featuring feedback from satisfied users who achieved their health goals using the app.

6. **Loader:** Smooth transitions between app sections are facilitated by a Loader component displaying engaging loading animations.

7. **Progress Bars:** Dynamic progress bars reflect the user's BMI category, providing visual health progress tracking.

8. **Routing and Communication:** Seamless navigation between quiz, variants, height/weight input, and results, with interactive component communication for a smooth user experience.

9. **Navigation:** Users can move across 13 different app pages, including a "Step Back" button for easy navigation.

10. **Email:** Allows users to save data to the backend API with frontend/backend validation.

11. **Offer:** Users can select from three available plans.

12. **Checkout:** Simulates payment, performs form validation, and sends data to the backend server using the /submit-checkout endpoint.

13. **Theme Switcher:** Toggle between light and dark themes for personalized app display.

### Usage

To run the app:

1. Clone the repository to your local machine: `git clone https://github.com/njordulv/next-wellness-app.git`
2. Install the required dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your web browser and navigate to http://localhost:3000 to access the app.

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
