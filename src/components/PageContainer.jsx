import Nav from './Nav'
import Main from './Main'
import Aside from './Aside'

const PageContainer = () =>{
    return(
        <div className='page-container'>
            <Nav/>
            <Main/>
            <Aside/>
        </div>
    )
}
export default PageContainer