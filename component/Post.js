
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
const Post = ({ posts, handleCmt, handleLike, handleShare, styles}) => {
    return (
        <View style={styles.container} key={posts.id} >
            <View style={styles.newfeed_ctn}>
                <View style={styles.name_image_ctn}>
                    <Image
                        style={styles.avt_image}
                        source={{ uri: (posts.avt_img) }}
                    />
                    <View style={styles.name_ctn}>
                        <Text style={styles.name}>{posts.name}</Text>
                    </View>
                    {/* 20521850 */}
                </View>
                <View style={styles.cap_ctn}>
                    <Text>{posts.cap}</Text>
                </View>

                <View style={styles.image_ctn}>
                    <Image
                        style={styles.post_image}
                        source={{ uri: (posts.image) }}
                    />
                </View>
                {/* 20521850 */}
                <View style={styles.like_cmt_share_display}>
                    <Text style={styles.txt_like_display} >{posts.like} Likes</Text>
                    <Text style={styles.txt_like_display}>{posts.comment} Comments</Text>
                    <Text style={styles.txt_like_display}>{posts.share} Shares</Text>
                </View>
                <View style={styles.like_cmt_share}>
                    <TouchableOpacity onPress={() => handleLike(posts.id)}>
                        <View style={styles.touch_ctn}>
                            <Image style={{ height: 15, width: 15, margin: 3 }}
                                source={posts.like_image}
                            ></Image>
                            <Text
                            >Likes</Text>
                        </View>
                        {/* 20521850 */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCmt(posts.id)} >
                        <View style={styles.touch_ctn}>
                            <Image style={{ height: 15, width: 15, margin: 3 }} source={require('../assets/comment.jpg')}></Image>
                            <Text style={styles.txt_cmt_display_btn}>Comments</Text>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleShare(posts.id)}>
                        <View style={styles.touch_ctn}>
                            <Image style={{ height: 15, width: 15, margin: 3 }} source={require('../assets/share.jpg')}></Image>
                            <Text style={styles.txt_share_display_btn}>Shares</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Post