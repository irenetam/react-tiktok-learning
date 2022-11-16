import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/315592005_1826136711086403_7122904490470863707_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=qj1DYE9n2hoAX9GQRiX&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAUgcf1blcNVxeupBKK89fME-fRKR-WrIBXvq9EydIP8Q&oe=6379930D"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ABC</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>gsgsg</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>

                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {};

export default AccountPreview;
