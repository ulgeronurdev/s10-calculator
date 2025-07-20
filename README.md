# Calculator

Bu görevde yarım bırakılmış bir hesap makinesi uygulamasını tamamlaman isteniyor.

Uygulamanın UI kısmı hazır, bazı temel bileşenler yazılmış durumda. Senin görevin, eksik kalan reducer fonksiyonlarını ve action creator'ları tamamlayarak bu uygulamayı çalışan bir hale getirmek.

**Bu basitleştirilmiş hesap makinesi diğerlerinden farklı**, klasik hesap makineleri gibi basamak basamak girmek yerine, her tıklamada seçilen sayıyı toplama, çıkarma veya çarpma işlemlerine göre doğrudan uygular.

Toplam 7 görev bulunuyor:

### Görev 1: useReducer'ı Uygulamaya Bağla

- `App.jsx` dosyasını aç. `useReducer` hook'unu React'tan import et.
- `./store/reducers.jsx` dosyasındaki `reducer` fonksiyonunu ve `initialState`'i kullanarak bir reducer tanımla.
- `TotalDisplay` bileşeni, `value` prop'u üzerinden gelen değeri gösterir. Bu componenta müdahale etme.
- `CalcButton` bileşeni `value` ve `onClick` alır, tıkladığında bu `onClick` fonksiyonunu çalıştırır. Bu bileşene de müdahale etme.

### Görev 2: State Verilerini Ekrana Yansıt

- `state.total`, `state.operation` ve `state.memory` değerlerini UI'daki ilgili alanlara yerleştir:
  - `TotalDisplay` → `state.total`
  - `Operation` kısmı → `state.operation`
  - `Memory` kısmı → `state.memory`

Başlangıç olarak state değerleri şöyle olsun:

```jsx
{
  total: 100,
  operation: "*",
  memory: 100
}
```

- Bu değerlerin UI'da doğru yansıtıldığını test et.
- Daha sonra `initialState` değerini sıfırlanmış haliyle güncelle:

```jsx
{
  total: 0,
  operation: "+",
  memory: 0
}
```

### Görev 3: Sayı Butonlarına Action Bağla

- `./store/actions.jsx` içindeki `applyNumber(number)` action creator'ını `App.jsx` dosyasına import et.
- Tıklanan sayıyı `applyNumber` ile action olarak gönderen bir event handler oluştur.
- Bu fonksiyonu önce sadece `1` butonuna bağla (`onClick={() => handleClick(1)`} gibi).
- Ardından aynı handler'ı diğer tüm sayı butonlarına da bağla (2, 3, 4, …).
- Tüm sayıların doğru şekilde `total`'a eklendiğini test et.

### Görev 4: İşlem Seçim Butonlarını Bağla (+, -, \*)

- `CHANGE_OPERATION` action tipini reducer'dan al.
- `changeOperation(op)` isminde yeni bir action creator yaz (`/store/actions.jsx` içinde).
- `App.jsx` dosyasına import et.
- `+`, `-`, `*` butonlarına tıklandığında ilgili operatörü store'a gönderen bir event handler oluştur.
- Operatörün değiştiğini ve hesaplamaların doğru yapıldığını test et.

### Görev 5: CE Butonuyla Ekranı Sıfırla

- Reducer'a `CLEAR_DISPLAY` adlı yeni bir case ekle. Bu durumda sadece `total: 0` olmalı.
- `clearDisplay()` isminde bir action creator tanımla ve `App.jsx` dosyasına import et.
- CE butonuna tıklanınca bu action'ı dispatch edecek şekilde event handler yaz.
- Butonun doğru çalıştığını test et.

### Görev 6: = Butonunu Aktif Hale Getir

- `RESULT` adında yeni bir action tipi oluştur.
- Reducer içinde, `state.temp`, `state.total` ve `state.operation` bilgilerini kullanarak sonucu hesaplayan bir case yaz. (Bunun için calculateResult fonksiyonu kodda zaten var.)
- `result()` adında action creator oluştur ve = butonuna bağla.
- Hesaplamanın doğru çalıştığını test et.

### Görev 7: Hafıza (Memory) Fonksiyonlarını Uygula

Aşağıdaki butonlara karşılık gelen action'ları reducer ve action creator olarak yaz ve bağla:

- `M+`: Şu anki total değeri, memory alanına kaydedilmeli.
  - Action type: `MEMORY_ADD`

- `MR`: Memory alanındaki değer, total'e yazılmalı.
  - Action type: `MEMORY_RECALL`

- `MC`: Memory değeri sıfırlanmalı.
  - Action type: `MEMORY_CLEAR`

### Notlar

- Ekleyeceğin tüm action type'ları `actions.jsx` içinde `export const ... = "..."` şeklinde tanımlamalısın.
- UI tarafında yalnızca `App.jsx` içinde düzenleme yapmalısın. Diğer bileşenleri değiştirmene gerek yok.
- Tüm reducer case'lerinin `return {...state, ...}` formatında immutable şekilde yazılması bekleniyor.

## 🚀 Projeye Başlama

### Adım 1: Projeyi Kendi Hesabınıza Kopyalayın

1. Bu sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın
2. Kendi GitHub hesabınızda proje kopyası oluşacak

### Adım 2: Projeyi Bilgisayarınıza İndirin

Görseldeki adımları takip edin ya da terminali kullanabilirsiniz.

```bash
git clone [buraya-kendi-fork-linkinizi-yazın]
cd [proje-klasor-adi]
```

### Adım 3: Gerekli Kurulumları Yapın

Terminal açın ve sırasıyla şu komutları çalıştırın:

```bash
npm install
npm run c2w
```

> **💡 İpucu:** Bu komutlar gerekli paketleri yükler ve test sistemini başlatır.

### Adım 4: Projeyi Çalıştırın ve Browserda Görüntüleyin

Yeni bir terminal tabı açın ve şu komutu çalıştırın:

```bash
npm run dev
```

Bu komut projeyi çalıştıracak ve bir link verecek. Bu linki browserda açın ve yazdıklarınızın çıktısını gözlemleyin.

## 📝 Geliştirme Süreci

### 0. Öğrenci numaranızı `student_id.txt` dosyasına yazın 

### 1. Testleri Takip Edin

- Testlerin çalıştığı trminali açık tutun ve test çıktılarını izleyin
- Başarılı testler ✅, başarısız testler ❌ ile gösterilir

### 2. Adım Adım İlerleyin

- Her küçük ilerleme sonrası değişiklikleri kaydedin
- Testlerin durumunu kontrol edin
- Bir özelliği tamamen bitirdikten sonra commit yapın

### 3. Düzenli Commit Yapın

GitHub Desktop uygulamasını kullanarak ilerlemenizi sıklıkla GitHub'a gönderin.
Ya da terminali kullanabilirsiniz:

```bash
git add .
git commit -m "Anlamlı bir commit mesajı"
git push origin main
```

## 🧪 Otomatik Değerlendirme Sistemi

Bu proje otomatik test sistemi ile gelir. Test sonuçları terminal penceresinde görünür. Kırmızı (❌) testleri yeşile (✅) çevirmeye odaklanın.

## 🆘 Sorun Giderme

### Yaygın Sorunlar:

- **npm komutları çalışmıyor:** Node.js kurulu olduğundan emin olun
- **Testler çalışmıyor:** Terminal penceresini kapatıp `npm run c2w` komutunu tekrar çalıştırın

### Yardım İçin:

1. Terminal hatasını tam olarak okuyun
2. Dosya yollarının doğru olduğunu kontrol edin
3. Değişiklikleri kaydettiğinizden emin olun

## 📋 Çalışma Akışı Özeti

1. ✅ Projeyi fork edin ve clone edin
2. ✅ `npm install` ve `npm run c2w` çalıştırın
3. ✅ `npm run dev` ile projeyi çalıştırın ve size verdiği linki açarak yaptıklarınızı takip edin
4. ✅ Terminal'den test sonuçlarını takip edin
5. ✅ Düzenli olarak commit yapın
6. ✅ İlerleyişinizi GitHub'a push edin

**İyi çalışmalar! 🎨✨**
