import PageComponent from "@/component/pageComponent";

async function fetchData() {
    const API_KEY = process.env.API_KEY;
    const url = 'https://travel-advisor.p.rapidapi.com/locations/search';
    const queryParams = new URLSearchParams({
        query: 'world',
        limit: '30',
        offset: '0',
        units: 'km',
        location_id: '1',
        currency: 'USD',
        sort: 'relevance',
        lang: 'en_US'
    });

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    try {
        const res = await fetch(`${url}?${queryParams}`, options);
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch (e) {
        throw new Error(e.message);
    }
}

export default async function Page() {
    let posts = [];

    try {
        const response = await fetchData();
        const filteredPosts = response.data.filter(post => post.result_type === "things_to_do");
        posts = filteredPosts;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return (
        <div>
        <div className='d-flex justify-content-center'>
          <PageComponent posts={posts}/>
        </div>
        </div>
    );
}



