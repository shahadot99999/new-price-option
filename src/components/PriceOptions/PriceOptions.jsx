// import React from 'react';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          id: "basic_monthly",
          name: "Basic Membership",
          price: 29.99,
          billing_cycle: "monthly",
          features: [
            "Access to cardio equipment",
            "Access to weight training area",
            "Locker room access",
            "Standard gym hours (5am-11pm)",
            "No commitment - cancel anytime"
          ],
          popular: false
        },
        {
          id: "premium_monthly",
          name: "Premium Membership",
          price: 49.99,
          billing_cycle: "monthly",
          features: [
            "All Basic Membership features",
            "Unlimited group classes",
            "Access to sauna and steam room",
            "Free fitness assessment",
            "2 guest passes per month",
            "24/7 gym access"
          ],
          popular: true
        },
        {
          id: "student_yearly",
          name: "Student Plan",
          price: 249.99,
          billing_cycle: "yearly",
          features: [
            "All Basic Membership features",
            "Valid student ID required",
            "12-month commitment",
            "Access during non-peak hours",
            "Discount on personal training"
          ],
          popular: false
        },
        {
          id: "couple_monthly",
          name: "Couples Membership",
          price: 79.99,
          billing_cycle: "monthly",
          features: [
            "All Basic Membership features for two people",
            "Shared account management",
            "Joint fitness assessments",
            "Discount on couple's personal training",
            "2 free guest passes per month"
          ],
          popular: false
        },
        {
          id: "corporate_yearly",
          name: "Corporate Wellness",
          price: 399.99,
          billing_cycle: "yearly",
          features: [
            "All Premium Membership features",
            "Dedicated corporate wellness coach",
            "Priority class booking",
            "Monthly wellness workshops",
            "Nutrition counseling sessions",
            "5 guest passes per month"
          ],
          popular: false
        },
        {
          id: "senior_monthly",
          name: "Senior Fitness",
          price: 24.99,
          billing_cycle: "monthly",
          features: [
            "All Basic Membership features",
            "Special senior fitness classes",
            "Low-impact exercise options",
            "Physical therapy consultation",
            "Social events",
            "Age 60+ only"
          ],
          popular: false
        },
        {
          id: "family_yearly",
          name: "Family Plan",
          price: 899.99,
          billing_cycle: "yearly",
          features: [
            "Access for 2 adults + up to 3 children (under 18)",
            "All Premium Membership features for adults",
            "Kids' fitness classes",
            "Family locker room access",
            "Discounts on youth sports programs",
            "1 free personal training session per month"
          ],
          popular: false
        },
        {
          id: "offpeak_monthly",
          name: "Off-Peak Access",
          price: 19.99,
          billing_cycle: "monthly",
          features: [
            "Access to all equipment (weekdays 9am-4pm)",
            "No weekend or evening access",
            "Great for retirees or remote workers",
            "Can upgrade to full membership later"
          ],
          popular: false
        },
        {
          id: "challenge_12weeks",
          name: "12-Week Challenge",
          price: 299.99,
          billing_cycle: "one-time",
          features: [
            "3-month gym access",
            "Weekly progress check-ins",
            "Custom meal plan",
            "4 personal training sessions",
            "Before/after body scan",
            "Prize for top performers"
          ],
          popular: true
        },
        {
          id: "payg_daily",
          name: "Day Pass",
          price: 12.99,
          billing_cycle: "per visit",
          features: [
            "Single-day full gym access",
            "Use of all equipment",
            "Option to join group classes (if available)",
            "No commitment",
            "Can be applied toward membership later"
          ],
          popular: false
        },
        {
          id: "vip_monthly",
          name: "VIP Elite",
          price: 149.99,
          billing_cycle: "monthly",
          features: [
            "Unlimited personal training",
            "24/7 gym access + private entrance",
            "Luxury locker room with towels & toiletries",
            "Priority booking for all classes",
            "Complimentary smoothie bar",
            "Exclusive member events"
          ],
          popular: false
        }
      ];

    return (
        <div>
            <h2> Best Prices in the town</h2>
            {
                priceOptions.map(option=><PriceOption 
                key={option.id}
                option={option}
                ></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;