import home from '@/pages/home'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
const Home = () => {
    return (
        <><div>
            <h1>Welcome to Urban Company</h1>
            {/* dynamic call card components in home page  */}
        <Layout>
             <Card/>
             </Layout> 
           {/* <p>Your one-stop solution for all urban services</p> */}
</div>
            </>
    );
};

export default Home;