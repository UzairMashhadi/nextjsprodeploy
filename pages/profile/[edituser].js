import Head from 'next/head'
import Hero from '../../components/Hero'
import { useRouter } from 'next/router';

const Home = ({ data }) => {
    const router = useRouter()
    const name = router.query.edituser
    console.log(data)
    return (
        <main>
            <Head>
                <title>NextJS App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero heading='Edit User' message='I capture moments in nature and keep them alive.' name={name} />
            <h1>Json PlaceHolder user todos</h1>
            <br />
            <div>
                {data?.map((item, index) => (
                    <div key={index}>
                        <h3>ID : {item.id}</h3>
                        <h4>Name : {item.name}</h4>
                        <h4>Username : {item.username}</h4>
                        <h4>Email : {item.email}</h4>
                        <h4>Email2 : {item.email}</h4>
                        <h4>Email3 : {item.email}</h4>
                        <h4>Email4 : {item.email}</h4>
                        <br />
                    </div>
                ))}
            </div>
        </main>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: { data }
    }
}

export default Home