import { useState, useRef } from 'react'
import { View, Text, ScrollView, useWindowDimensions} from 'react-native'
import { ProgressBar } from '../../components/ProgressBar'
import {styles} from './styles'

type ScrollProps = {
    layoutMeasurement:{
        height: number;
    };
    contentOffset:{
        y: number;
    };
    contentSize:{
        height: number;
    }
}

export function Post(){
    const [percentage, setPercentage] = useState(0);
    const dimensions = useWindowDimensions();
    const scrollRef = useRef<ScrollView>(null);

    function scrollPercentage({contentSize, contentOffset, layoutMeasurement }:ScrollProps){
        const visibleContent = Math.ceil((dimensions.height / contentSize.height)*100);

        const value = ((layoutMeasurement.height + contentOffset.y)/contentSize.height)*100;
        //console.log(`${value}%`);
        setPercentage(value < visibleContent ? 0 : value);
    }  

    function handleScrollMoveTop(){
        scrollRef.current?.scrollTo({
            x:0,
            y:0,
            animated: true
        })
    }

    return(
        <View style={styles.container}>
            <ScrollView
                scrollEventThrottle={16}
                ref={scrollRef}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                onScroll = {(event)=>scrollPercentage(event.nativeEvent)}
            >
                <Text style={styles.title}>
                    Blogg fjpiedade
                </Text>

                <View>
                <Text style={styles.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam laboriosam at enim suscipit eligendi dicta obcaecati modi ex, corporis repellendus, molestiae id architecto. Voluptatem explicabo iusto quia distinctio inventore.
                </Text>

                <Text style={styles.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam laboriosam at enim suscipit eligendi dicta obcaecati modi ex, corporis repellendus, molestiae id architecto. Voluptatem explicabo iusto quia distinctio inventore.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                </Text>

                <Text style={styles.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsam laboriosam at enim suscipit eligendi dicta obcaecati modi ex, corporis repellendus, molestiae id architecto. Voluptatem explicabo iusto quia distinctio inventore.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur distinctio enim tempora recusandae nesciunt accusamus in quas vel iste, similique quod voluptatem reprehenderit harum ratione qui cum voluptates consequuntur magni.
                </Text>
                </View>
            </ScrollView>
            <ProgressBar 
                value={percentage}
                onMoveTop={handleScrollMoveTop}
                />
        </View>
    )
}