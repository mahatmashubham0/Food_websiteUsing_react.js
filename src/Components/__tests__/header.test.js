import { render } from "@testing-library/react"
import Header from '../Header'
import {StaticRouter} from 'react-router-dom/server'
import { Provider } from "react-redux"
import store from '../../utils/store'

test("Test the header component", () => {

    const header = render(
        <StaticRouter>
            <Provider store={store}>
               <Header />
            </Provider>
        </StaticRouter>
    )

    
    const logo = header.getAllByTestId("logo")

    console.log(logo)

})

test("load the online status the header component", () => {

    const header = render(
        <StaticRouter>
            <Provider store={store}>
               <Header />
            </Provider>
        </StaticRouter>
    )

    
    const onlineStatus = header.getByTestId("online-status")
    console.log(onlineStatus)
    
    expect(onlineStatus.innerHTML).toBe("Online Status:")

})