import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { LangChart, ForkRChart, ForkChart, StarChart } from './Charts';
const Repos = () => {
  const {repos} = React.useContext(GithubContext)
  
  //Languages
  let languages = repos.reduce((total,item)=>{
    const {language} = item
    if(language){
      if(!total[language])total[language] = {label:language, value:1}
      else total[language] = {...total[language], value: total[language].value+1}
    }
    return total
  }, {})
  languages = Object.values(languages).sort((a,b) => b.value - a.value).slice(0,5)

  //Stars Per Language
  let stars = repos.reduce((total,item)=>{
    const {language, stargazers_count} = item
    if(stargazers_count){
      if(!total[language])total[language] = {label:language, value:stargazers_count}
      else total[language] = {...total[language], value: total[language].value+stargazers_count}
    }
    return total
  }, {})
  stars = Object.values(stars).sort((a,b) => b.value - a.value).slice(0,5)

  //Forks
  let forks = repos.reduce((total, item)=>{
    const {name, forks_count} = item
    if(forks_count) total[name] = {label:name, value:forks_count}
    return total
  }, {})
  forks = Object.values(forks).sort((a,b) => b.value - a.value).slice(0,5)

  //Stars Per Repo
  let starsr = repos.reduce((total,item)=>{
    const {name, stargazers_count} = item
    if(stargazers_count) total[name] = {value: stargazers_count, label: name}
    return total
  }, {})
  starsr = Object.values(starsr).sort((a,b) => b.value - a.value).slice(0,5)

  return <section className="section">
    <Wrapper className='section-center'>
      {/* <ExampleChart chartData={chartData}></ExampleChart> */}
      <div>
        <LangChart chartData={languages}></LangChart>
        <StarChart chartData={stars}></StarChart>
      </div>
      <div>
        <ForkChart chartData={forks}></ForkChart>
        <ForkRChart chartData={starsr}></ForkRChart>
      </div>
    </Wrapper>
  </section>
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
