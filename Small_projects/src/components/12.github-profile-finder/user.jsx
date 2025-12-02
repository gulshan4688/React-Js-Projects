export default function User({ user }) {
    const { avatar_url, followers, following, public_repos, repos_url, url, name, login } = user;
    return (
        <div className="user" >
            <div>
                <img className="avatar" src={avatar_url} alt="user" />
            </div>
            <div>
                <h3> {name || login}</h3>
                <h1>followers: {followers}</h1>
                <h1>following: {user.following}</h1>
                <h1>{public_repos}</h1>
                <a href={repos_url}>repo Url</a>
            </div>
        </div>
    )
}