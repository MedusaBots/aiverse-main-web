import './Mint.css';
import logo from '../../assets/images/logo.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Mint = () => {

    return (
        <div className='mintParent'>
            <p className='mintTitle'>Mint Your First</p>
            <p className='mintTitleBold'>AI Generated NFTs</p>
            <div className='mintButtonParent'>
                <input className='mintInput' placeholder='Enter your phase' />
                <button className='mintButton'>Mint Now</button>
            </div>
            <div>
                <div className='mintDesign'></div>
                <div className='elipse'></div>
                <div className='bottomElipse'></div>
            </div>
            <p className='mintBottomText'>Let Us <span className='mintBottomtextGradientKnow'>Know What</span><br/><span className='mintBottomtextGradientThinking'>You're Thinking</span></p>
            <div className='mintEmailParent'>
                <input className='mintEmailInput' placeholder='Your Email' />
                <button className='mintEmailButton'>Send</button>
                <p className='mintEmailText'>Get In<br/>Touch</p> 
            </div>
            <div className='mintFooter'>
                <img className='logo' src={logo} />
                <div className='maintFooterTextParent'>
                    <p className='mintFooterText'>Sharp the</p>
                    <p className='mintFooterText'>AI Industry </p>
                </div>
                <div className='mintFooterLinkParent'>
                    <div className='mintFooterInternalLink'>
                        <p className='internalLink'>About Us</p>
                        <p className='internalLink'>Contact</p>
                        <p className='internalLink'>Home</p>
                        <p className='internalLink'>Whitepaper</p>
                    </div>
                    <div className='mintFooterExternalLink'>
                        <TwitterIcon className='externalLink' />
                        <FacebookOutlinedIcon className='externalLink' />
                        <YouTubeIcon className='externalLink' />
                    </div>
                </div>
            </div>
            {/* For Mint Footer Mobile */}
            <div className='mintFooterMobile'>
                <img className='logoMobile' src={logo} />
                <div className='maintFooterTextParentMobile'>
                    <p className='mintFooterTextMobile'>Sharp the</p>
                    <p className='mintFooterTextMobile'>AI Industry </p>
                </div>
            </div>
            <div className='mintFooterLinkParentMobile'>
                    <div className='mintFooterInternalLink'>
                        <p className='internalLink'>About Us</p>
                        <p className='internalLink'>Contact</p>
                        <p className='internalLink'>Home</p>
                        <p className='internalLink'>Whitepaper</p>
                    </div>
                    <div className='mintFooterExternalLink'>
                        <TwitterIcon className='externalLink' />
                        <FacebookOutlinedIcon className='externalLink mintFooterExternalLinkMiddle' />
                        <YouTubeIcon className='externalLink' />
                    </div>
                </div>
            <div className='mintTermsAndPolicyParent'>
                <div className='copyRight'>
                    <CopyrightIcon style={{fontSize: 'medium'}} />
                    <p className='mintTermsAndPolicy'>&nbsp;2021. All Right Reserved.</p>
                </div>
                <p className='mintTermsAndPolicy mintTermsAndPolicyMiddle'>Privacy Policy</p>
                <p className='mintTermsAndPolicy'>Terms & Conditions</p>
            </div>
        </div>
    );
}

export default Mint;