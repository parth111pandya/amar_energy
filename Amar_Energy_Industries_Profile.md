# Amar Energy Industries - Enterprise Website Prompt

You are a principal full-stack developer specializing in the modern React ecosystem. Your task is to generate a fully production-ready, accessible, and responsive website for **Amar Energy Industries** using the company details found in `Amar_Energy_Industries_Profile.md`[cite: 1] and the specific product data provided below.

---

## 1. Technical Stack Specifications
You must strictly build the application using the following engineering stack:
*   **Core Framework & Language:** Next.js (v16.2.6) leveraging the App Router (`app/` directory) with TypeScript (v5.7.3) and React (v19).
*   **Styling:** Tailwind CSS (v4.2.0) with PostCSS for utility-first styling.
*   **UI Components:** Custom components matching Shadcn UI patterns built atop Radix UI Primitives (Dropdown-Menu, Dialog, Accordion, Tooltip, Tabs) and Lucide React for consistent icons.
*   **Animations:** Smooth, high-fidelity UI animations via Framer Motion and layout sliders/carousels via Embla Carousel.
*   **Forms & Validation:** React Hook Form integrated with Zod for client-side schema validation.
*   **Data Visualization:** Recharts for rendering performant data comparisons.
*   **Content Management:** Read dynamic markdown contents/blogs using Remark and gray-matter parsing.
*   **Infrastructure & Services:** Form submissions routed via Resend for email notifications; layout deployed optimally for Vercel Hosting with Vercel Analytics tracking enabled.
*   **Package Manager:** Project configuration assumed to run via pnpm.

---

## 2. Global Navigation Layout (Sticky Header)
The site must feature a responsive navigation header containing:
*   **Logo/Brand:** Amar Energy Industries.
*   **Nav Items:** Home, Why Solar?, Objectives, Quality, Contact.
*   **Products Dropdown (Crucial):** A Radix-powered dropdown menu titled **"Products"** containing:
    *   Amar Solar Water Heaters[cite: 1]
    *   Amar Solar Water Heating Systems[cite: 1]

---

## 3. Core Page Content & Sections (Sourced from Amar_Energy_Industries_Profile.md)

### Section 1: Hero & About Us
*   **Copy:** Detail the 10-year journey starting from solar garden lights in Morbi, Gujarat, to achieving a global footprint[cite: 1]. 
*   **Mission:** Highlight grid-independence for millions via a transparent business model[cite: 1].
*   **CTA:** A Framer Motion animated button downloading the E-Catalogue (`https://www.amarenergy.com/e-catalogue-water-heater.pdf`)[cite: 1].

### Section 2: Why Solar? & Data Visualization
*   **Context:** Detail the ongoing challenges of peak-period power outages and air pollution[cite: 1].
*   **Recharts Integration:** Build a responsive Bar Chart or Component to visually represent the **Per Capita Energy Use (TOE)**[cite: 1]:
    *   Canada: 8.42 | USA: 8.01 | Japan: 4.20 | China: 1.01 | India: 0.43[cite: 1]
*   **Challenges Grid:** Create a grid of 4 cards displaying Fossil Fuel Scarcity, Air Pollution, Volatile Markets ($100/barrel), and Climate Change[cite: 1].

### Section 3: Objectives & The ESTPL Advantage
*   **Objectives:** Use an interactive Radix Accordion or interactive grid layout to present their core operational goals (Promote, Conserve, Commercialize, Bridge Supply Gap)[cite: 1].
*   **Key Partnership Benefits:** A visually distinct feature matrix describing: Best Technology, Superior Design, Financial Strength (Zero upfront cost), Real-Time Assessments (24/7 monitoring), and Transparency[cite: 1].

### Section 4: Products Showcase (Deep Dive Component)
Create an interactive component or tabbed section showcasing the product lineup[cite: 1]. Implement detailed cards with Framer Motion hover states utilizing this exact data:

#### Product 1: AMAR Solar Water Heaters
*   **Description:** Ideal for routine hot water requirements for bathing, washing, and other household chores. AMAR Domestic Solar Water Heating Systems supply hot water at **60°C** and operate on the Thermo-siphon / Natural Convection principle. The hot water is collected and stored in a properly insulated storage tank, which ensures that the water heated the previous day also remains hot for a morning bath the next day.
*   **Product Specifications Grid (Display as an elegant checklist or feature grid using Lucide Icons):**
    *   World's latest Solar Water Heating Technology.
    *   Specially designed for Indian conditions.
    *   Highly economical, energy saver.
    *   Good Thermal efficiency.
    *   Best Vacuum insulated Glass tube.
    *   Special Grade Borosilicate Glass Tube.
    *   Specially Black Coated Double-layered glass tube.
    *   Occupies less space compared to the Flat Plate system.
    *   Installation is possible in hard water areas.
    *   PUFF insulated SS, MS, AL & CU Tank.
    *   Screwless fitting SS Tanks.
    *   Electrical backup provided for non-sunny days.
    *   Nil maintenance.
    *   Long lifespan of **20 years**.
    *   Available in various capacities.
    *   Auto sun tracking due to the round surface.
    *   Starts heating quickly.

#### Product 2: AMAR Solar Water Heating Systems[cite: 1]
*   *Provide a matching secondary placeholder layout for the industrial/larger scale variant based on the domestic core tech setup.*

### Section 5: Quality Management System (Q.M.S)
*   Highlight validation frameworks: **ISO Standards**, **5S Methodology**, and **Kaizen**[cite: 1].
*   Create an interactive step-by-step UI track for their Testing & Inspection Facilities (In-process, Welding/D.P. Test, Pressure, Water, and Temperature Validation)[cite: 1].

### Section 6: Photo Gallery
*   Implement an interactive **Embla Carousel** or dynamic grid layout titled "PHOTO GALLERY" acting as an upscale imagery portfolio asset[cite: 1].

### Section 7: Secure Contact Form & Footer
*   **Form:** A contact form built with React Hook Form and Zod validation, mapping to a simulated backend Resend email service.
*   **Footer Details:** Render exact address coordinates ("ENERGY FARM", Sanala-Ghunda Road, Near Lake, Shakt Sanal, MORBI - 363 641), Mobile contacts, Tele Fax, and email link (`morbi_solar@yahoo.com`)[cite: 1].

---

## 4. Code Generation Output Guidelines
*   Provide clean, modular, and typed `tsx` code structures.
*   Follow clean Next.js architecture separating standard server components from `'use client'` interactive nodes.
*   Ensure beautiful, accessible (A11y compliant) markup across the entire delivery.