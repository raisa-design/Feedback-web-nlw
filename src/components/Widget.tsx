import {ChatTeardropDots} from 'phosphor-react';
// import {useState} from 'react';
import {Popover} from '@headlessui/react';
import { WidgetForm } from './WidgetForm';

//Observação, tirei o useState para usar o popover, devido a acessibilidade. O popover está em
//um biblioteca headless ui de acessibilidade

export function Widget(){
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  // function toggleWidgetVisibility(){
  //   setIsWidgetOpen(!isWidgetOpen)
  // }
// {isWidgetOpen ? <p>Hello World</p> : null} posso usar assim ou assim  {isWidgetOpen && <p>Hello World</p>}
  return(
      <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-10 flex flex-col items-end">
        <Popover.Panel><WidgetForm/></Popover.Panel>
        {/* {isWidgetOpen ? <p>Hello World</p> : null} */}
      
        <Popover.Button  className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
          <ChatTeardropDots className="w-6 h-6"/>
          
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="pl-2"></span>
            Feedback
          </span>
        </Popover.Button>      
      </Popover>
     
    
    )
}

//Observação:
//Para fazer com que o butão cresça com o nome feedback quando passar o mouse, foi colocado o "group" na classe para
//que dessa forma todos os itens que estivessem dentro do butão pertencesse ao grupo
//o ease linear, significa que a transição vai ser igual do inicio ao fim 