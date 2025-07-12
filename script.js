 document.addEventListener('DOMContentLoaded', function() {
            // Example of dynamic recipe loading
            const recipes = [
                {
                    id: 1,
                    title: "Beef Bourguignon",
                    description: "Classic French beef stew cooked in red wine with mushrooms and pearl onions.",
                    image: "https://placehold.co/600x400?text=Beef+Bourguignon",
                    time: "3.5 hours",
                    difficulty: "Advanced"
                },
                {
                    id: 2,
                    title: "Margherita Pizza",
                    description: "Simple Neapolitan pizza with tomato sauce, fresh mozzarella, and basil.",
                    image: "https://placehold.co/600x400?text=Margherita+Pizza",
                    time: "1 hour",
                    difficulty: "Medium"
                },
                {
                    id: 3,
                    title: "Berry Smoothie Bowl",
                    description: "Healthy breakfast bowl with blended berries, granola, and honey.",
                    image: "https://placehold.co/600x400?text=Berry+Smoothie+Bowl",
                    time: "10 min",
                    difficulty: "Easy"
                }
            ];

            // Form submission handler
            const searchForm = document.getElementById('searchForm');
            if (searchForm) {
                searchForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const query = document.getElementById('searchQuery').value;
                    alert(`Searching for recipes with: ${query}`);
                    // In a real app, you would fetch recipes based on the search query here
                });
            }

            // Responsive adjustments
            function adjustRecipeCards() {
                const cards = document.querySelectorAll('.recipe-card');
                const width = window.innerWidth;
                
                if (width < 480) {
                    cards.forEach(card => {
                        card.style.margin = '0 0 20px 0';
                    });
                }
            }

            window.addEventListener('resize', adjustRecipeCards);
            adjustRecipeCards();
        });