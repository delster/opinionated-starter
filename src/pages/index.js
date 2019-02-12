import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Alerts from '../components/reactstrap/alerts'
import Badge from '../components/reactstrap/badge'
import Breadcrumbs from '../components/reactstrap/breadcrumbs'
import Buttons from '../components/reactstrap/buttons'
import ButtonDropdown from '../components/reactstrap/buttondropdown'
import ButtonGroup from '../components/reactstrap/buttongroup'
import Card from '../components/reactstrap/card'
import Carousel from '../components/reactstrap/carousel'
import Collapse from '../components/reactstrap/collapse'
import Dropdowns from '../components/reactstrap/dropdowns'
import Fade from '../components/reactstrap/fade'
import Form from '../components/reactstrap/form'
import InputGroup from '../components/reactstrap/inputgroup'
import Jumbotron from '../components/reactstrap/jumbotron'
import Grid from '../components/reactstrap/grid'
import ListGroup from '../components/reactstrap/listgroup'
import Media from '../components/reactstrap/media'
import Modals from '../components/reactstrap/modals'
import Navbar from '../components/reactstrap/navbar'
import Navs from '../components/reactstrap/navs'
import Spinners from '../components/reactstrap/spinners'
import Pagination from '../components/reactstrap/pagination'
import Popovers from '../components/reactstrap/popovers'
import Progress from '../components/reactstrap/progress'
import Tables from '../components/reactstrap/tables'
import Tabs from '../components/reactstrap/tabs'
import Tooltips from '../components/reactstrap/tooltips'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Alerts />
    <Badge />
    <Breadcrumbs />
    <Buttons />
    <ButtonDropdown />
    <ButtonGroup />
    <Card />
    <Carousel />
    <Collapse />
    <Dropdowns />
    <Fade />
    <Form />
    <Grid />
    <InputGroup />
    <Jumbotron />
    <ListGroup />
    <Media />
    <Modals />
    <Navbar />
    <Navs />
    <Spinners />
    <Pagination />
    <Popovers />
    <Progress />
    <Tables />
    <Tabs />
    <Tooltips />
  </Layout>
)

export default IndexPage
