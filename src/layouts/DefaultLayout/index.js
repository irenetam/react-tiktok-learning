import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './SideBar';

const cx = classNames.bind(styles);

function DefautLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('contain')}>{children}</div>
            </div>
        </div>
    );
}

export default DefautLayout;
