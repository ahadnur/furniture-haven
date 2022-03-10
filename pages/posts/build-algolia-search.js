
// const dotenv = require('dotenv');
import dotenv from 'dotenv';
import algoliasearch from 'algoliasearch/lite';
// const algoliasearch = require('algoliasearch/lite');

try {
    dotenv.config();

    if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID){
        throw new Error('NEXT_PUBLIC_ALGOLIA_APP_ID is not valid')
    }
    if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY){
        throw new Error('ALGOLIA_SEARCH_ADMIN_KEY is not valid')
    }

} catch (error) {
    console.log(error);
    process.exit(1);
}

console.log("It works")

