document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    const pages = {
        home: `
            <section class="hero">
                <h1>Empowering You to Ensure Clean and Safe Water, Anywhere</h1>
                <p>Check water quality near you or find safe water sources.</p>
                <a href="#" data-page="check-water-safety" class="cta-button">Check Water Quality</a>
            </section>
        `,
        "check-water-safety": `
            <section>
                <h1>Check Water Safety</h1>
                <p>Interactive map and tools to check water safety near you.</p>
            </section>
        `,
        "discover-water-sources": `
            <section>
                <h1>Discover Water Sources</h1>
                <p>Find water sources near you using GPS-enabled mapping.</p>
            </section>
        `,
        "water-quality-reports": `
            <section>
                <h1>Water Quality Reports</h1>
                <p>View the latest water quality reports and updates.</p>
            </section>
        `,
        "how-it-works": `
            <section>
                <h1>How It Works</h1>
                <p>Learn how Aqua Zuri helps you ensure water safety.</p>
            </section>
        `,
        "get-help": `
            <section>
                <h1>Get Help</h1>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required>
                    
                    <label for="location">Location:</label>
                    <input type="text" id="location" name="location" required>
                    
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    
                    <button type="submit">Send Inquiry</button>
                </form>
            </section>
        `,
        resources: `
            <section>
                <h1>Resources & Education</h1>
                <p>Learn about water safety and how to use Aqua Zuri effectively.</p>
            </section>
        `,
        "sign-in": `
            <section>
                <h1>Sign In</h1>
                <form id="register-form">
                    <h2>Register</h2>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" required>
                    
                    <label for="location">Location:</label>
                    <input type="text" id="location" name="location" required>
                    
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required>
                    
                    <button type="submit">Register</button>
                </form>
                <form id="login-form">
                    <h2>Sign In</h2>
                    <label for="login-email">Email:</label>
                    <input type="email" id="login-email" name="login-email" required>
                    
                    <label for="login-password">Password:</label>
                    <input type="password" id="login-password" name="login-password" required>
                    
                    <button type="submit">Sign In</button>
                </form>
            </section>
        `
    };

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = e.target.getAttribute("data-page");
            if (pages[page]) {
                content.innerHTML = pages[page];
            }
        });
    });
});