import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) { // é sempre criado um novo client em cada requisição, de acordo com a documentaão do prismic
    const prismic = Prismic.client(
        process.env.PRISMIC_ENDPOINT, 
        {
            req, // esse é o mesmo req que é recebdi nas apis routes ou nos métodos serversideprops ou staticprops ....
            accessToken: process.env.PRISMIC_ACCESS_TOKEN, 
        }
    )

    return prismic;
}