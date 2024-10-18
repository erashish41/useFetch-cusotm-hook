import useFetch from "./UseFetch";

const {data, error, pending} = useFetch("https://dummyjson.com/products", {});

