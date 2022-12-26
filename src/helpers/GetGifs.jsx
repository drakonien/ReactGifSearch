import * as GiphyConfig from '../assets/GiphyConfig';
import { format } from 'react-string-format';

export const getGifs = async (category) => {
    const searchUrl = format(GiphyConfig.giphyUrl, GiphyConfig.giphyApiKey, category);
    const resp = await fetch(searchUrl);

    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => ({
        id: id,
        title: title,
        url: images.downsized_medium.url
    }));
    return gifs;
}
