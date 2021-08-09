import React, { useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom";

interface MarkerProps {
  map: kakao.maps.Map | kakao.maps.Roadview;
  position: kakao.maps.LatLng | kakao.maps.Viewpoint;

  /**
   * click 이벤트 핸들러
   */
  onClick?: () => void;

  /**
   * mouseover 이벤트 핸들러
   */
  onMouseOver?: () => void;

  /**
   * mouseout 이벤트 핸들러
   */
  onMouseOut?: () => void;

  /**
   * dragstart 이벤트 핸들러
   */
  onDragStart?: () => void;

  /**
   * dragend 이벤트 핸들러
   */
  onDragEnd?: () => void;

  /**
   * 마커의 이미지
   */
  image?: kakao.maps.MarkerImage;

  /**
   * 마커 엘리먼트의 타이틀 속성 값 (툴팁)
   */
  title?: string;

  /**
   * 드래그 가능한 마커, 로드뷰에 올릴 경우에는 유효하지 않다.
   */
  draggable?: boolean;

  /**
   * 클릭 가능한 마커
   */
  clickable?: boolean;

  /**
   * 마커 엘리먼트의 z-index 속성 값
   */
  zIndex?: number;

  /**
   * 마커 투명도 (0-1)
   */
  opacity?: number;

  /**
   * 로드뷰에 올라있는 마커의 높이 값(m 단위)
   */
  altitude?: number;

  /**
   * 로드뷰 상에서 마커의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 마커는 로드뷰에서 보이지 않게 된다.
   */
  range?: number;

  /**
   * InfoWindow 옵션
   */
  infoWindowOptions?: {
    /**
     * 인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false)
     */
    disableAutoPan?: boolean;

    /**
     * 삭제 가능한 인포윈도우
     */
    removable?: boolean;

    /**
     * 인포윈도우 엘리먼트의 z-index 속성 값
     */
    zIndex?: number;

    /**
     * 로드뷰에 올라있는 인포윈도우의 높이 값(m 단위)
     */
    altitude?: number;

    /**
     * 로드뷰 상에서 인포윈도우의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 인포윈도우는 보이지 않게 된다
     */
    range?: number;
  };
}

const Marker: React.FC<MarkerProps> = ({
  map,
  position,
  children,
  altitude,
  clickable,
  draggable,
  image,
  infoWindowOptions,
  onClick,
  onDragEnd,
  onDragStart,
  onMouseOut,
  onMouseOver,
  opacity,
  range,
  title,
  zIndex,
}) => {
  const infoContainer = useRef(document.createElement("div"));

  // Marker 객체는 단 한번만 생성 되도록 함
  const marker = useMemo(() => {
    const kakaoMarker = new kakao.maps.Marker({
      altitude,
      clickable,
      draggable,
      image,
      opacity,
      range,
      title,
      zIndex,
      position,
    });

    return kakaoMarker;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // map 객체 변화에 따른 객체 생성 및 삭제
  useEffect(() => {
    marker.setMap(map);

    return () => {
      marker.setMap(null);
    };
  }, [map, marker]);

  // dragstart 이벤트 핸들러
  useEffect(() => {
    if (!map || !marker) return;

    if (onDragStart)
      kakao.maps.event.addListener(marker, "dragstart", onDragStart);

    return () => {
      if (onDragStart)
        kakao.maps.event.removeListener(marker, "dragstart", onDragStart);
    };
  }, [map, marker, onDragStart]);

  // dragend 이벤트 핸들러
  useEffect(() => {
    if (!map || !marker) return;

    if (onDragEnd) kakao.maps.event.addListener(marker, "dragend", onDragEnd);

    return () => {
      if (onDragEnd)
        kakao.maps.event.removeListener(marker, "dragend", onDragEnd);
    };
  }, [map, marker, onDragEnd]);

  // click 이벤트 핸들러
  useEffect(() => {
    if (!map || !marker) return;

    if (onClick) kakao.maps.event.addListener(marker, "click", onClick);

    return () => {
      if (onClick) kakao.maps.event.removeListener(marker, "click", onClick);
    };
  }, [map, marker, onClick]);

  // mouseover 이벤트 핸들러
  useEffect(() => {
    if (!map || !marker) return;

    if (onMouseOver)
      kakao.maps.event.addListener(marker, "mouseover", onMouseOver);

    return () => {
      if (onMouseOver)
        kakao.maps.event.removeListener(marker, "mouseover", onMouseOver);
    };
  }, [map, marker, onMouseOver]);

  // mouseout 이벤트 핸들러
  useEffect(() => {
    if (!map || !marker) return;

    if (onMouseOut)
      kakao.maps.event.addListener(marker, "mouseout", onMouseOut);

    return () => {
      if (onMouseOut)
        kakao.maps.event.removeListener(marker, "mouseout", onMouseOut);
    };
  }, [map, marker, onMouseOut]);

  // mouseout 이벤트 핸들러
  useEffect(() => {
    if (!map || !marker) return;

    if (onMouseOut)
      kakao.maps.event.addListener(marker, "mouseout", onMouseOut);

    return () => {
      if (onMouseOut)
        kakao.maps.event.removeListener(marker, "mouseout", onMouseOut);
    };
  }, [map, marker, onMouseOut]);

  // image 객체가 존재하면 이미지를 로드한다
  useEffect(() => {
    if (!map || !marker) return;

    if (image) marker.setImage(image);
  }, [map, marker, image]);

  // altitude 값이 있으면 높이를 조정한다
  useEffect(() => {
    if (!map || !marker) return;

    if (altitude) marker.setAltitude(altitude);
  }, [map, marker, altitude]);

  // clickable 값이 있으면 클릭이 가능하도록 한다.
  useEffect(() => {
    if (!map || !marker) return;

    if (clickable) marker.setClickable(clickable);
  }, [map, marker, clickable]);

  // draggable 값이 있으면 드래그가 가능하도록 한다.
  useEffect(() => {
    if (!map || !marker) return;

    if (draggable) marker.setDraggable(draggable);
  }, [map, marker, draggable]);

  // opacity 값이 있으면 투명도를 조절한다.
  useEffect(() => {
    if (!map || !marker) return;

    if (opacity) marker.setOpacity(opacity);
  }, [map, marker, opacity]);

  // range 값이 있으면 마커의 가시반경을 조절한다.
  useEffect(() => {
    if (!map || !marker) return;

    if (range) marker.setRange(range);
  }, [map, marker, range]);

  // title 값이 있으면 마커의 제목을 조절한다.
  useEffect(() => {
    if (!map || !marker) return;

    if (title) marker.setTitle(title);
  }, [map, marker, title]);

  // zIndex 값이 있으면 마커의 zindex를 조절한다.
  useEffect(() => {
    if (!map || !marker) return;

    if (zIndex) marker.setZIndex(zIndex);
  }, [map, marker, zIndex]);

  useEffect(() => {
    if (!marker || !map || !children) return;

    const kakaoInfoWindow = new kakao.maps.InfoWindow({
      ...infoWindowOptions,
      content: infoContainer.current,
      position: position,
    });

    kakaoInfoWindow.open(map, marker);

    return () => {
      kakaoInfoWindow.close();
    };
  }, [marker, map, position, children, infoWindowOptions]);

  return ReactDOM.createPortal(children, infoContainer.current);
};

export default Marker;
