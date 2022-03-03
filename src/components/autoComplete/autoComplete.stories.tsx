import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AutoComplete,{DataSourceType} from './autoComplete';

export default {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  argTypes: {
    width: {
      control: { type: 'radio',options:["300px","400px","500px"] }
    },
  }
} as ComponentMeta<typeof AutoComplete>;
 
const DefaultAutoComplete: ComponentStory<typeof AutoComplete> = (args) => {
  const {fetchSuggestions,...rest} = args;
  interface githubProps{
    value:string;
    id:number;
    url:string;
  }
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res=>res.json())
    .then(({items})=>{
      return items.slice(0,10).map((item: { login: string; })=>({value:item.login,...item}));
    })
  }
  const renderOption = (item: DataSourceType<githubProps>) => {
    return (
      <>
        <p onClick={action("selected")}>{item.value}</p>
        {/* <p>userId: {item.id}</p>
        <p>url: <a href={item.url}>{item.url}</a></p> */}
      </>
    )
  }
  return <AutoComplete 
    fetchSuggestions={handleFetch}
    renderOption={renderOption}
    {...rest}
  />
}
export const gitHubAutoComplete = DefaultAutoComplete.bind({});
gitHubAutoComplete.args = {
  width:"300px"
}



