import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import './codeBlock.scss';

const font = (text) => {
    text = (text.match(/\#.*?\s/g))
    const trim = (text) => (text.replace(/\#\w/, '')) 
    const result = text.map((item,i) => {
        switch (item.charAt(1)) {
            case 'w': return <font key={i} color='#ffffff'>{trim(item)}</font>
            case 'b': return <font key={i} color='#00BFFF'>{trim(item)}</font>
            case 'l': return <font key={i} color='#7ac6df'>{trim(item)}</font>
            case 'v': return <font key={i} color='#DA70D6'>{trim(item)}</font>    
            case 'o': return <font key={i} color='#DEB887'>{trim(item)}</font>
            case 'y': return <font key={i} color='#F0E68C'>{trim(item)}</font>  
            case 'g': return <font key={i} color='#C0C0C0'>{trim(item)}</font>    
        }
    })
    return result
}

const items = [
    {id: 'id-1', html: <>{font('#vimport #lReact #w, #w{ #luseState, #luseEffect #w} #vfrom #o"react" #w; ')}</>},
    {id: 'id-2', html: <>{font('#vimport #lReactDom #vfrom #o"react-dom/client" #w; ')}</>},
    {id: 'id-4', html: <>{font('#bconst #lgetStr #w= #y() #b=> #b[ #o" #wH #o" #w, #o" #we #o" #w, #o" #wl #o" #w, #o" #wl #o" #w, #o" #wo #o" #w, #o" #wW #o" #w, #o" #wo #o" #w, #o" #wr #o" #w, #o" #wl #o" #w, #o" #wd #o" #w, #o" #w! #o" #b] ')}</>},
    {id: 'id-6', html: <>{font('#bconst #yApp #w= #y() #b=> #w{ ')}</>},
    {id: 'id-7', html: <div style={{'marginLeft': '30px'}}>{font('#bconst #b[ #lstr #w, #ysetStr #b] #w= #yuseState #y(getStr()) ')}</div>},
    {id: 'id-8', html: <div style={{'marginLeft': '30px'}}>{font('#bconst #b[ #lcount #w, #ysetCount #b] #w= #yuseState(-1) ')}</div>},
    {id: 'id-10', html: <div style={{'marginLeft': '30px'}}>{font('#yuseEffect #y(() #b=> #w{ )')}</div>},
    {id: 'id-11', html: <div style={{'marginLeft': '60px'}}>{font('#ysetCount #y( #lcount #b=> #lcount #w+ #y1 #y) ')}</div>},
    {id: 'id-12', html: <div style={{'marginLeft': '60px'}}>{font('#vif #y( #lcount #w> #y9 #w|| #lstr #b[ #y0 #b] #w=== #o"reset" #y) #w{ #ysetCount(-1) #w; #ysetStr(getStr()) #w} ')}</div>},
    {id: 'id-13', html: <div style={{'marginLeft': '30px'}}>{font('(#w}, #b[str] #y) ')}</div>},
    {id: 'id-15', html: <div style={{'marginLeft': '30px'}}>{font('#vreturn #y( )')}</div>},
    {id: 'id-16', html: <div style={{'marginLeft': '60px'}}>{font('#g<> ')}</div>},
    {id: 'id-17', html: <div style={{'marginLeft': '90px'}}>{font('#g< #bh1 #g> #w{ #bstr #w} #g</ #bh1 #g>< #bbr #g/> ')}</div>},
    {id: 'id-18', html: <div style={{'marginLeft': '90px'}}>{font('#w{ #bcount #w> #y0 #w? #g<>< #bdiv #g> #wCount: #w{ #bcount #w} #g</ #bdiv #g>< #bbr #g/></> #w: #g<>< #bbr #g/>< #bbr #g/></> #w} ')}</div>},
    {id: 'id-19', html: <div style={{'marginLeft': '90px'}}>{font('#g< #bbutton #lonClick #w={ #y() #b=> #ysetStr( #b[ #w... #bstr] #w. #ysort(() #b=> #lMath #w. #yrandom() #w- #y0.5 #y)) #w} #g> #wShuffle! #g</ #bbutton #g> ')}</div>},
    {id: 'id-20', html: <div style={{'marginLeft': '90px'}}>{font('#w{ #bcount #w> #y0 #w&& #g< #bbutton #lonClick #w={ #y() #b=> #ysetStr( #b[ #o"reset" #b] #y) #w} #g> #wReset #g</ #bbutton #g> ')}</div>},
    {id: 'id-21', html: <div style={{'marginLeft': '60px'}}>{font('#g</> ')}</div>},
    {id: 'id-22', html: <div style={{'marginLeft': '30px'}}>{font('(#y) ')}</div>},
    {id: 'id-23', html: <>{font('#w} ')}</>},
    {id: 'id-25', html: <>{font('#lReactDOM. #ycreateRoot( #ldocument. #ygetElementById( #o"root" #y).render( #g< #yApp #g/> #y) ')}</>},
]

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  function Quote({ quote, index }) {
    return (
      <Draggable draggableId={quote.id} index={index}>
        {provided => (
          <div className="code_block"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {quote.html}
          </div>
        )}
      </Draggable>
    );
  }
  
  const QuoteList = React.memo(function QuoteList({ quotes }) {
    return quotes.map((quote, index) => (
      <Quote quote={quote} index={index} key={quote.id} />
    ));
  });

export const CodeBlock = () => {
    const [state, setState] = useState({ quotes: items });

    function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
                {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}
                className="code_drag_list">
                    <QuoteList quotes={state.quotes} />            
                    {provided.placeholder}
                </div>
                )}
        </Droppable>
        </DragDropContext>
    )
}