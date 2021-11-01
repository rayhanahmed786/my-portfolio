import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
      <ResumeStyled>
        <Title title={"Resume"} span={"resume"} />
        <InnerLayout>
          <div className="small-title">
            <SmallTitle icon={briefcase} title={"Working Experience"} />
          </div>
          <div className="resume-content">
            <ResumeItem
              year={"2021 - Present"}
              title={"Full Stack Web Development "}
              subTitle={"Theme Forest"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
            <ResumeItem
              year={"2016 - 2017"}
              title={"Android Apps Development"}
              subTitle={"Android Studios"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
            <ResumeItem
              year={"2017 - 2018"}
              title={"HTML Theme Development "}
              subTitle={"Theme Forest"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
          </div>
          <div className="small-title u-small-title-margin">
            <SmallTitle icon={school} title={"Educational Qualifications"} />
          </div>
          <div className="resume-content ">
            <ResumeItem
              year={"2014 - 2018"}
              title={"Computer Science Engnearing"}
              subTitle={"Sylhet International University"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
            <ResumeItem
              year={"2011 - 2013"}
              title={"Higher Secondary"}
              subTitle={"Fenchugong Degree College"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
            <ResumeItem
              year={"2011"}
              title={"Secondary "}
              subTitle={"Syed Riyasot Ali High School"}
              text={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
              }
            />
          </div>
        </InnerLayout>
      </ResumeStyled>
    );
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
