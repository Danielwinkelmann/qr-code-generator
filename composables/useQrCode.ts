import { ComputedRef, Ref } from 'vue';
import QRCodeStyling, { Options, DotType, CornerSquareType, CornerDotType } from 'qr-code-styling-new';
import { useDateInput } from '~~/store/states';

export function useQrCode() {
  const dotTypes: DotType[] = ['dots', 'rounded', 'classy', 'classy-rounded', 'square', 'extra-rounded'];
  const cornerSquareType: CornerSquareType[] = ['dot', 'square', 'extra-rounded'];
  const cornerDotType: CornerDotType[] = ['dot', 'square'];
  const color = reactive({
    background: 'transparent',
    dots: '#1e1e1e',
  });
  const shape = reactive({
    dot: 'square' as DotType,
    corner: 'square' as CornerSquareType,
    corderDot: 'square' as CornerDotType,
  });
  const image = reactive({
    imageSize: 10,
    image: '',
    margin: 5,
  });
  const data = useDateInput();
  const qrCode: Ref<QRCodeStyling> = ref();
  const options: ComputedRef<Options> = computed(() => {
    return {
      width: 150,
      height: 150,
      type: 'svg',
      data: data.value || 'Hello World!',
      image: image.image,
      dotsOptions: {
        color: color.dots,
        type: shape.dot,
      },
      cornersDotOptions: {
        type: shape.corderDot,
      },
      cornersSquareOptions: {
        type: shape.corner,
      },
      backgroundOptions: {
        color: color.background,
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: image.margin,
        imageSize: image.imageSize,
      },
    };
  });

  const download = (type: 'svg' | 'jpeg' | 'png', name: string) => qrCode.value.download({ name, extension: type });
  onMounted(() => {
    qrCode.value = new QRCodeStyling(options.value);
    const canvas = document.getElementById('canvas');
    qrCode.value.append(canvas);
  });
  watch(
    [data, color, shape, image],
    () => {
      qrCode.value.update(options.value);
    },
    { immediate: false }
  );

  return {
    dotTypes,
    cornerSquareType,
    cornerDotType,
    data,
    image,
    color,
    shape,
    download,
  };
}
