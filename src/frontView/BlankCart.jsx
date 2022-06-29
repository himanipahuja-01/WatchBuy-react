import React from 'react';
import { Link } from 'react-router-dom';

function BlankCart(props) {
    return (
        <div>
            <div class="">
        <div class="container margin">
            <div class="row">
                <div class="offset-lg-3 col-lg-6 col-md-12 col-12 text-center">
                    <img src="images/cartempty.webp" alt="" class="img-fluid mb-4"/>
                    <h2>Your shopping cart is empty</h2>
                    <p class="mb-4">
                        Return to the store to add items for your delivery slot. Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our shop page.
                    </p>
                    <Link to="/About" class="btn btn-primary">Explore Products</Link>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
}

export default BlankCart;