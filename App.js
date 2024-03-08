import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
const App = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('./assets/images/background-image.png')}
        style={styles.backgroundImage}
      />

      {/* Container with Scroll View */}
      <View style={styles.overlayContainer}>
        <ScrollView style={styles.scrollView}>
          {/* Content */}
          <View style={styles.contentContainer}>
            {/* Title */}
            <Text style={styles.title}>Financial Freedom Europe</Text>

            {/* Date and Location */}
            <Text style={styles.detailsText}>
              Dec 12, 2023 | 16:00 | Business Meeting
            </Text>
            {/* <Icon name="location-outline" size={30} color="#900" /> */}
            <Text style={styles.detailsText}>
              Salinas, Santa Elena, Ecuador
            </Text>

            {/* Description with Read More */}
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vel metus nec sapien eleifend aliquet.{' '}
              {showFullText
                ? 'Dolor sit amet, consectetur adipiscing elit. '
                : '... '}
              <Text onPress={handleReadMore} style={styles.readMore}>
                {showFullText ? 'Read Less' : 'Read More'}
              </Text>
            </Text>

            {/* Attach Files */}
            <Text style={styles.title}>Attach Files</Text>

            {/* Images */}
            <View style={styles.imageRow}>
              {/* Replace image sources with your actual image paths */}
              <Image
                source={require('./assets/images/image-1.jpg')}
                style={styles.avatarImage}
              />
              <Image
                source={require('./assets/images/image-2.jpg')}
                style={styles.avatarImage}
              />
              <Image
                source={require('./assets/images/image-3.jpg')}
                style={styles.avatarImage}
              />
            </View>

            {/* Privacy Option */}
            <View style={styles.privacyContainer}>
              <Text style={styles.title}>Privacy Option</Text>
              <Text style={styles.privacyText}>Private</Text>
            </View>

            {/* Participants */}
            <View style={styles.participantsContainer}>
              <Text style={styles.title}>Participants</Text>
              {/* Add your custom avatar group component here */}
            </View>

            {/* Agenda */}
            <View style={styles.agendaContainer}>
              <Text style={styles.titleWithUnderline}>Agenda</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.viewButtonText}>View</Text>
              </TouchableOpacity>
            </View>

            {/* Assignee */}
            <View style={styles.assigneeContainer}>
              <Text style={styles.title}>Assignee</Text>
              {/* Add your custom avatar group component here */}
            </View>

            {/* Request to Join Button */}
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Request to Join Event</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  readMore: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  privacyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  privacyText: {
    color: 'white',
  },
  participantsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleWithUnderline: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  viewButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  viewButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  assigneeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  joinButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
