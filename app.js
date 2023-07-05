const app = Vue.createApp({
    data() {
        return{
            listings: [
                {
                    title: 'How to win friends and influence people (new edition)',
                    author: 'Dale carnegie',
                    price: 'Php 450',
                    img_src: 'assets/howtowinfriends.jpg',
                    quantity: 1,
                    showBook: true
                },
                {
                    title: 'Essentialism',
                    author: 'Greg Mckeown',
                    price: 'Php 750',
                    img_src: 'assets/essentialism.jpg',
                    quantity: 1,
                    showBook: true
                },
                {
                    title: 'Ikigai',
                    author: 'Hector Garcia',
                    price: 'Php 450',
                    img_src: 'assets/ikigai.jpg',
                    quantity: 1,
                    showBook: true
                },
            ],
            showCart: false,
            booksOnCart: [], // initially empty
            searchInput: '', // initially empty string
            showFeaturedBooks: true,
            showHomeButton: false
        }
    },

    methods: {
        addToCart(book) {
            // if book is already on cart, increase quantity
            if (this.booksOnCart.includes(book)) {
                book.quantity++;
                alert("Added to cart!")
            }
            else {
                this.booksOnCart.push(book)
                alert("Added to cart!")
            }
        },
        toggleShowCart() {
            this.showCart = !this.showCart;
        },
        decreaseQuantity(book) {
            /* if there's only one book in the cart, remove it
            from the cart */
            if (book.quantity == 1) {
                // find the book's index then remove it
                book_index = this.booksOnCart.indexOf(book)
                this.booksOnCart.splice(book_index, 1)
            }
            else {
                book.quantity--;
            }
        },
        increaseQuantity(book) {
            book.quantity++;
        },
        searchBook(query) {
            // unshow featured books
            this.showFeaturedBooks = false;
            this.showHomeButton = true;

            // find all the matching titles / author
            console.log("hello")
            for (var i = 0; i < this.listings.length; i++) {
                if (!this.listings[i].title.toLowerCase().includes(query) && !this.listings[i].author.toLowerCase().includes(query)) {
                    this.listings[i].showBook = false;
                }
                else {
                    this.listings[i].showBook = true;
                }
            }
        },
        goHome() {
            this.showFeaturedBooks = true; // show featured books label
            this.searchBook(''); // show all books again
        }
    },
    
    computed: {
        getNumberOfItemsOnCart() {
            return this.booksOnCart.length
        },
        filteredListings: function () {
            return this.listings.filter((listing) => listing.showBook)
        }
    }
})

app.mount('#app')