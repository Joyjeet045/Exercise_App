
export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'abe539fb8fmsh11703782a2b309dp1a00e8jsn52356454eadf',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();
    return data;
}
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'abe539fb8fmsh11703782a2b309dp1a00e8jsn52356454eadf',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};