import { MenuCard } from "../interfaces/menu-card.interface";

export const MenuConfig: MenuCard[] = [
    {
        title: "Appetizers",
        plates: [
            {
                name: "Bruschetta",
                description: "Grilled bread rubbed with garlic and topped with olive oil, salt, and fresh tomatoes",
                price: 8.99
            },
            {
                name: "Calamari Fritti",
                description: "Crispy fried calamari served with marinara sauce",
                price: 12.99
            },
            {
                name: "Caprese Salad",
                description: "Fresh mozzarella, tomatoes, and sweet basil with a balsamic glaze",
                price: 10.99
            }
        ]
    },
    {
        title: "Main Courses",
        plates: [
            {
                name: "Grilled Salmon",
                description: "Atlantic salmon fillet with lemon butter sauce, served with asparagus and roasted potatoes",
                price: 24.99
            },
            {
                name: "Beef Tenderloin",
                description: "8oz beef tenderloin with red wine reduction, mashed potatoes, and seasonal vegetables",
                price: 29.99
            },
            {
                name: "Mushroom Risotto",
                description: "Creamy Arborio rice with a medley of wild mushrooms and Parmesan cheese",
                price: 18.99
            }
        ]
    },
    {
        title: "Desserts",
        plates: [
            {
                name: "Tiramisu",
                description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
                price: 8.99
            },
            {
                name: "Chocolate Lava Cake",
                description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
                price: 9.99
            },
            {
                name: "New York Cheesecake",
                description: "Rich and creamy cheesecake with a graham cracker crust, topped with fresh berries",
                price: 7.99
            }
        ]
    }
];