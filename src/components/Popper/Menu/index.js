import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
    };
    return (
        <Tippy
            interactive={true}
            placement="bottom-end"
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={cx('menu-popper')}>{renderItems()}</PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
