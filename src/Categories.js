import React from 'react';
import { useSelector } from 'react-redux';
import './App.css'





function Categories() {

    const items = useSelector(state => state.add)

    items.sort((a, b) => {
        let x = a.category;
        let y = b.category;

        if (x < y) {
            return -1;
        }
        else if (x > y) {
            return 1;
        }
        return 0;

    })

    const unique = [...new Set(items.map((val) => val.category))]


    return (
        <div class="DisplayItems">
            <h2>All Categories</h2>
            <br />
            <div class='h-divider'>
            </div>
            <div class="CategoryItems">
                {unique.map((val) => {

                    let tempCategory = val;
                    return (
                        <div class="DisplayCategories">
                            <h2>Category {val}</h2>
                            <div class="Individ-Categories">
                                {items.map((value) => {
                                    if (tempCategory === value.category) {

                                        return (
                                            <div class="card">
                                                <h3>{value.model}</h3>
                                                <h3>{value.category}</h3>
                                                <h3>Description</h3>
                                            </div>
                                        )

                                    }
                                    return

                                }




                                )}
                            </div>
                            <div class='h-divider'>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Categories;