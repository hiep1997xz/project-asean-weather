const getImage128URL = url => {
    url = url.trim();
    url = url.replace("64", "128");
    url = url.replace("64", "128");
    //console.log("222222222222222",url)
    return url;
}

export default getImage128URL;
