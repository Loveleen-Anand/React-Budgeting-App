//assets
import {Form,NavLink } from "react-router-dom";
import logomark from "../Assets/logomark.svg";

import {TrashIcon} from '@heroicons/react/24/solid';

const Nav = ({userName})=>(

    <nav>
        <NavLink to="/" aria-label="Go to home">
            <img src={logomark} alt="" height={30} />
            <span>HomeBudget</span>
        </NavLink>
        {userName &&
            <Form method="post" action="/logout"
                onSubmit={(event) => {
                    // eslint-disable-next-line no-restricted-globals
                    if (!confirm("Are you sure to delete user and all data?")) {
                        event.preventDefault();
                    }
                } }>
                <button type="submit" className="btn btn--warning">
                    <span>Delete User</span>
                    <TrashIcon width={20} />
                </button>
            </Form>}
    </nav>
)

export default Nav;