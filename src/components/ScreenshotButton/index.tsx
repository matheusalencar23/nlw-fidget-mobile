import { TouchableOpacity, Image, View } from "react-native";
import { styles } from "./styles";
import { Trash, Camera } from "phosphor-react-native";
import { theme } from "../../theme";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShoot: () => void;
  onRemoveShoot: () => void;
}

export default function ScreenshotButton({
  screenshot,
  onTakeShoot,
  onRemoveShoot,
}: ScreenshotButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShoot : onTakeShoot}
    >
      {screenshot ? (
        <View>
          <Image style={styles.image} source={{ uri: screenshot }} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  );
}
