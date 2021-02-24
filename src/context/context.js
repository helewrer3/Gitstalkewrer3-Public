import React, { useState} from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';

const rootUrl = 'https://api.github.com';

const GithubContext =  React.createContext();

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    const [loading, setLoading] = useState(false)
    const [isWrong, setIsWrong] = useState(false)
    const getUser = async (input) => {
        try {
            setLoading(true)
            const res1 = await fetch(`${rootUrl}/users/${input}`)
            const res2 = await fetch(`${rootUrl}/users/${input}/repos?per_page=100`)
            const res3 = await fetch(`${rootUrl}/users/${input}/followers?per_page=20`)
            const user = await res1.json()
            if(user.message == "Not Found") throw(new Error("Invalid User"))
            const user_repos = await res2.json()
            const user_followers = await res3.json()
            setGithubUser(user)
            setRepos(user_repos)
            setFollowers(user_followers)
            setIsWrong(false)
            setLoading(false)
        } catch (error) {
            setIsWrong(true)
            setLoading(false)
            console.log(error)
        }
    }
    return <GithubContext.Provider value={{
        githubUser,
        repos,
        followers,
        getUser,
        isWrong,
        loading
    }}>
        {children}
    </GithubContext.Provider>
}

export {GithubProvider, GithubContext}