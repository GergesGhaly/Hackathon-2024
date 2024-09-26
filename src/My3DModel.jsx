import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// تسجيل ScrollTrigger مع GSAP
gsap.registerPlugin(ScrollTrigger);

function Model() {
  const { scene } = useGLTF("/earth.glb");
  return <primitive object={scene} scale={1.2} />;
}

function AnimatedModel() {
  const modelRef = useRef(); // نستخدم useRef للتحكم في المجموعة
  const [scale, setScale] = useState(3);
  const orbitControlsRef = useRef(); // للتحكم في OrbitControls

  useEffect(() => {
    if (!modelRef.current) return;
    // تحريك العنصر بنصفه في البداية (section 1)
    gsap.set(modelRef.current?.position, { y: -2 }); // تظهر نصف النموذج فقط

    // إعداد الرسوم المتحركة باستخدام ScrollTrigger
    ScrollTrigger.create({
      trigger: "#section-1",
      start: "top top",
      end: "bottom top",
      scrub: true, // للتفاعل السلس
      toggleActions: "paly paly reverse play",
      onEnter: () => {
        gsap.to(modelRef.current?.position, { y: 0, duration: 1 });
      },
      onEnterBack: () => {
        gsap.to(modelRef.current?.position, { y: -2, x: 0, duration: 1 });
        gsap.to(modelRef.current?.scale, {
          x: 3, // تصغير الحجم إلى النصف
          y: 3,
          z: 3,
          duration: 1,
        });
        gsap.to(modelRef.current?.rotation, {
          y: 10, // دوران الموديل حول محوره
          duration: 1,
          ease: "power1.inOut",
        });
      },
    });

    // تحريك العنصر لليمين وتصغير الحجم مع الدوران في section 2
    ScrollTrigger.create({
      trigger: "#section-2",
      start: "-50% top",
      end: "bottom top",
      scrub: true, // للتفاعل السلس
      toggleActions: "play reverse play reverse", // لتطبيق الحركات العكسية عند التمرير لأعلى

      onEnter: () => {
        gsap.to(modelRef.current?.position, { x: 3, duration: 1 }); // الانتقال لليمين
        gsap.to(modelRef.current?.scale, {
          x: scale / 2, // تصغير الحجم إلى النصف
          y: scale / 2,
          z: scale / 2,
          duration: 1,
        });
        gsap.to(modelRef.current?.rotation, {
          y: 10, // دوران الموديل حول محوره
          duration: 5,
          // ease: "power1.inOut",
        });
      },
      onEnterBack: () => {
        gsap.to(modelRef.current?.position, { x: 3, duration: 1 }); // الانتقال لليسار
        gsap.to(modelRef.current?.scale, {
          x: scale / 2, // تصغير الحجم إلى النصف
          y: scale / 2,
          z: scale / 2,
          duration: 1,
        });
        gsap.to(modelRef.current?.rotation, {
          y: 10, // دوران الموديل حول محوره
          duration: 5,
          // ease: "power1.inOut",
        });
      },
    });

    // تكبير العنصر ليصبح خلفية في section 3
    ScrollTrigger.create({
      trigger: "#section-3",
      start: "-50% top",
      end: "bottom bottom",
      scrub: true,
      toggleActions: "play reverse play reverse", // لتطبيق الحركات العكسية عند التمرير لأعلى

      onEnter: () => {
        gsap.to(modelRef.current?.position, {
          x: 1.2,
          y: 0,
          z: -1,
          duration: 2,
          ease: "power1.inOut",
        });
        gsap.to(modelRef.current?.scale, { x: 4, y: 4, z: 3.5, duration: 2 });
      },
    });

    // دوران حر في section 4
    ScrollTrigger.create({
      trigger: "#section-4",
      start: "top center",
      end: "bottom center",
      scrub: true,
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to(modelRef.current?.position, { x: 0, y: 0, z: 0, duration: 1 }); // إعادة الموديل للوسط
        gsap.to(modelRef.current?.scale, {
          x: scale / 2,
          y: scale / 2,
          z: scale / 2,
          duration: 2,
        });
        gsap.to(modelRef.current?.rotation, {
          y: "+=6", // دوران حر مع التمرير
          duration: 3,
        });
        if (orbitControlsRef.current) {
          orbitControlsRef.current.enabled = true; // تفعيل التحكم بالدوران
        }
      },
      onLeaveBack: () => {
        gsap.to(modelRef.current?.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 2,
          ease: "power1.inOut",
        });
        gsap.to(modelRef.current?.scale, { x: 4, y: 4, z: 4, duration: 2 });
        if (orbitControlsRef.current) {
          orbitControlsRef.current.enabled = false;
        }
      },
    });
  }, [scale]);

  return (
    <>
      <group ref={modelRef} scale={scale}>
        <Model />
      </group>
      <OrbitControls ref={orbitControlsRef} enabled={false} />{" "}
      {/* تمكين/تعطيل التحكم بناءً على القسم */}
    </>
  );
}

export default function My3DModel() {
  return (
    <div id="canvas-container" style={{ height: "100%" }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 10]} intensity={1} />

        <Suspense fallback={"Loading..."}>
          <AnimatedModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
