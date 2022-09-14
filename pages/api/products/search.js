import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { client } from '../../../lib/client';

export default function SearchScreen() {

    const router = useRouter();
    const {
        category = 'all',
        query = 'all',
        price = 'all',
    } = router.query;
    const [state, setstate] = useState({
        categories: [],
        products: [],
        error: '', 
        loading: true,
    });

    const { loading, products, error } = state;
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data } = await axios.get(`/api/products/categories`);
                setCategories(data); 
            } catch (err) {
                console.log(error.message);
            }
        };
        fetchCategories();

        const fetchData = async () => {
            try {
              let gQuery = '*[_type == "product"';
              if (category !== 'all') {
                gQuery += `&& category match "${category}"`;
              }
              if (price !== 'all') {
                const minPrice = Number(price.split('-')[0]);
                const maxPrice = Number(price.split('-')[1]);
                gQuery += `&& price >= ${minPrice} && price <=${maxPrice}`;

                setstate({ loading: true });

                const products = await client.fetch(gQuery);
                setstate ({ products, loading: false });
              }
            } catch (err) {
                setstate({ error: err.message, loading: false });
            }
        };
        fetchData();
    }, [category, price, query]);

    const filterSearch = ({ 
        category,
        sort,
        searchQuery,
        price,}) => {
            const path = router.pathname;
            const { query } = router;
            if (searchQuery) query.searchQuery = searchQuery;
            if (category) query.category = category;
            if (price) query.price = price;
            if (sort) query.sort = sort;
            
            router.push({
                pathname: path,
                query: query,
            });
        };
        const categoryHandler = (e) => {
            filterSearch({ category: e.target.value });
        };
        const sortHandler = (e) => {
            filterSearch({ category: e.target.value });
        };
        const priceHandler = (e) => {
            filterSearch({ category: e.target.value });
        };

const SearchScreen = () => {
  return (
    <div>
      SearchScreen
    </div>
  )
}
}