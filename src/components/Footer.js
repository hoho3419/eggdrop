import React from 'react';
import {useNavigate} from "react-router-dom"
import styles from './Footer.module.css'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className={styles['footer']}>
            <div className={styles['info_box']}>
                <div className={styles['menu_box']}>
                <img onClick={() => navigate('/')} src={process.env.PUBLIC_URL + '/assets/EGGDROP/푸터_로고.png'} alt="푸터로고" />
                    <span onClick={() => navigate('/menu')}>MENU</span>
                    <span onClick={() => navigate('/menu')}>SOTRE</span>
                    <span onClick={() => navigate('/menu')}>ABOUT</span>
                    <span onClick={() => navigate('/menu')}>CONTACT</span>
                    <span onClick={() => navigate('/menu')}>가맹문의</span>
                </div>
                <div className={styles['desc_box']}>
                    <div className={styles['inquiry']}>
                        <span>고객문의</span> ㅣ
                        <span>개설문의</span> ㅣ
                        <span>개인정보취급방침</span>
                    </div>
                    <div className={styles['total_info']}>
                        <div>주식회사 골든하인드 서울특별시 서초구 강남대로 311 (드림플러스 강남)</div>
                        <div>사업자등록번호 : 138-87-00801</div>
                        <div>전화 : 1670-4809</div>
                        <div>메일 : support@goldenhind.co.kr</div>
                        <div>Copyright© 주식회사 골든하인드. All Rights Reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;