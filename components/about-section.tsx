{/* Bagian Tools dengan Logo dan Teks Nama */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Tools</h3>
        <div className="relative w-full">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 pt-2 scrollbar-thin scroll-smooth snap-x snap-mandatory">
            {(data?.clients || []).map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-28 md:w-40 md:h-32 bg-secondary rounded-xl md:rounded-2xl border border-border flex flex-col items-center justify-center p-3 md:p-4 hover:border-accent transition-colors snap-card gap-2"
              >
                {/* Pembungkus gambar agar ukurannya tetap proporsional */}
                <div className="w-full h-12 md:h-16 flex items-center justify-center">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                {/* Teks Nama Tool di bawah foto */}
                <span className="text-xs md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors text-center truncate w-full">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>